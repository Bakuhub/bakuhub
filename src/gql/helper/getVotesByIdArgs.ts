import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {ConnectType} from "../../types";
import {getTableNameWithId} from "../../utils/getTableNameWithId";
import {DocumentNode} from "graphql";
import {gql, QueryHookOptions} from "@apollo/client";
import {capitalize} from "@mui/material";

const votesByIdQuery = (tableName: string) => {
    const queryString = `
query _sum($by: [VotesOn${capitalize(tableName)}ScalarFieldEnum!]!, $where: VotesOn${capitalize(tableName)}WhereInput) {
  groupByVotesOn${capitalize(tableName)}(by: $by, where: $where) {
    _sum {
      vote
    }
    ${tableName}Id
  }
}
    `;
    return gql(queryString);
};

export interface VotesByIdQueryData {
    groupByVotesOnVision: Array<{
        "_sum": {
            "vote": number,
            "__typename": "VotesOnVisionSumAggregate"
        },
        // todo(update it to dynamic type)
        timelineId?: string
        threadId?: string
        visionId?: string
        "__typename": "VotesOnVisionGroupBy"
    }>;
}

export function getVotesByIdArgs(
        ids: Array<string>,
        type: ConnectType,
        options: QueryHookOptions = {}
): [DocumentNode, { variables: { by: string; where: { [p: string]: {} } } }] {
    const tableName = getTableNameByConnectType(type);
    const tableNameWithId = getTableNameWithId(tableName);
    return [
        votesByIdQuery(tableName),
        {
            ...options,
            variables: {
                by: tableNameWithId,
                "where": {
                    [tableNameWithId]: {
                        ...ids.length === 1 ? {
                            "equals": ids[0]
                        }:{"in": ids}
                    }

                },
            }
        }
    ];
}
