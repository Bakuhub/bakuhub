import {gql} from "@apollo/client";
import {ConnectConfig} from "../../types";
import {DocumentNode} from "graphql";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";

const reactionByUserQuery = gql`
    query FindFirstReactionOnVisions($where: ReactionOnVisionsWhereInput) {
        reactionByUser: findFirstReactionOnVisions(where: $where) {
            reaction
        }
    }
`;

export interface GetReactionByUserArgsProps extends ConnectConfig {
    userId?: string;
}

export const getReactionByUserArgs = ({
                                          type,
                                          id,
                                          userId
                                      }: GetReactionByUserArgsProps): [DocumentNode, { variables: { where: { [p: string]: { equals: string | null } } } }] => [
    reactionByUserQuery, {
        variables: {
            "where": {
                ...userId ?
                        {
                            "userId": {
                                "equals": userId
                            }
                        }:{},
                [`${getTableNameByConnectType(type)}Id`]: {
                    "equals": id
                }
            }
        }
    }
];