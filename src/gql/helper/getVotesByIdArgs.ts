import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {ConnectType} from "../../types";
import {getTableNameWithId} from "../../utils/getTableNameWithId";
import {DocumentNode} from "graphql";
import {gql} from "@apollo/client";
import {capitalize} from "@mui/material";

const votesByIdQuery = (tableName: string) => {
    const queryString = `
query _sum($by: [VotesOn${capitalize(tableName)}ScalarFieldEnum!]!) {
  groupByVotesOn${capitalize(tableName)}(by: $by) {
    _sum {
      vote
    }
  }
}
    `;
    return gql(queryString);
};


export function getVotesByIdArgs(
        id: string,
        type: ConnectType
): [DocumentNode, { variables: { by: string; where: { [p: string]: { equals: string } } } }] {
    const tableName = getTableNameByConnectType(type);
    const tableNameWithId = getTableNameWithId(tableName);
    return [
        votesByIdQuery(tableName),
        {
            variables: {
                by: "vote",
                "where": {
                    [tableNameWithId]: {
                        "equals": id
                    }
                },
            }
        }
    ];
}
