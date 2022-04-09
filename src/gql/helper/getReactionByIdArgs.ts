import {Reaction} from "../../components/Premise/PremiseDetail";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {ConnectType} from "../../types";
import {getTableNameWithId} from "../../utils/getTableNameWithId";
import {DocumentNode} from "graphql";
import {capitalize} from "@mui/material";
import {gql} from "@apollo/client";

const reactionByVisionsIdQuery = (tableName: string) => {
    const queryString = `query _count($by: [ReactionOn${capitalize(tableName)}sScalarFieldEnum!]!, $whereUpvotes: ReactionOn${capitalize(
            tableName)}sWhereInput,
        $whereDownvotes: ReactionOn${capitalize(tableName)}sWhereInput) {
        upVotes: groupByReactionOn${capitalize(tableName)}s (by: $by, where: $whereUpvotes) {
            _count {
                _all
            }
            ${tableName}Id
        }
        downVotes:groupByReactionOn${capitalize(tableName)}s(by: $by, where: $whereDownvotes) {
            _count {
                _all
            }
            ${tableName}Id
        }
    }`;
    return gql(queryString);
};


export function getReactionByIdArgs(
        ids: string[],
        type: ConnectType
): [DocumentNode, { variables: { by: string; whereDownvotes: { AND: ({ [p: string]: { in: string[] } | { equals: string } } | { reaction: { equals: Reaction } })[] }; whereUpvotes: { AND: ({ [p: string]: { in: string[] } | { equals: string } } | { reaction: { equals: Reaction } })[] } } }] {
    const tableName = getTableNameByConnectType(type);
    const tableNameWithId = getTableNameWithId(tableName);
    return [
        reactionByVisionsIdQuery(tableName),
        {
            variables: {
                "by": tableNameWithId,
                whereUpvotes: {
                    AND: [
                        {

                            [tableNameWithId]: ids.length > 1 ? {
                                "in": ids
                            }:{
                                "equals": ids[0]
                            }
                        }, {
                            "reaction": {
                                "equals": Reaction.UPVOTE
                            },
                        }
                    ]

                },
                whereDownvotes: {
                    AND: [
                        {

                            [tableNameWithId]: ids.length > 1 ? {
                                "in": ids
                            }:{
                                "equals": ids[0]
                            }
                        }, {
                            "reaction": {
                                "equals": Reaction.DOWNVOTE
                            },
                        }
                    ]

                }
            }
        }
    ];
}
