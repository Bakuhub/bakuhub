import {Reaction} from "../../components/Premise/PremiseDetail";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {ConnectType} from "../../types";
import {getTableNameWithId} from "../../utils/getTableNameWithId";
import {DocumentNode} from "graphql";
import {capitalize} from "@mui/material";
import {gql} from "@apollo/client";

const reactionByIdQuery = (tableName: string) => {
    const queryString = `
        query _count($whereUpvotes: ReactionOn${capitalize(tableName)}sWhereInput,$whereDownvotes:ReactionOn${capitalize(
            tableName)}sWhereInput) {
            upVotes: aggregateReactionOn${capitalize(tableName)}s(where: $whereUpvotes) {
                _count {
                    reaction
                }
            }
            downVotes: aggregateReactionOn${capitalize(tableName)}s(where: $whereDownvotes) {
                _count {
                    reaction
                }
            }
        }
    `;
    return gql(queryString);
};


export function getReactionByIdArgs(
        id: string,
        type: ConnectType
): [DocumentNode, { variables: { whereDownvotes: { AND: ({ [p: string]: { equals: string } } | { reaction: { equals: Reaction } })[] }; whereUpvotes: { AND: ({ [p: string]: { equals: string } } | { reaction: { equals: Reaction } })[] } } }] {
    const tableName = getTableNameByConnectType(type);
    const tableNameWithId = getTableNameWithId(tableName);
    return [
        reactionByIdQuery(tableName),
        {
            variables: {
                whereUpvotes: {
                    AND: [
                        {

                            [tableNameWithId]: {
                                "equals": id
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

                            [tableNameWithId]: {
                                "equals": id
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
