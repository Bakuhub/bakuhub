import {ConnectConfig} from "../../types";
import {DocumentNode} from "graphql";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {capitalize} from "@mui/material";
import {gql} from "@apollo/client";

const reactionByUserQuery = (tableName: string) => {
    const queryString = `
    query FindFirstReactionOn${capitalize(tableName)}s($where: ReactionOn${capitalize(tableName)}sWhereInput) {
        reactionByUser: findFirstReactionOn${capitalize(tableName)}s(where: $where) {
            reaction
        }
    }
`;
    return gql(queryString);
};

export interface GetReactionByUserArgsProps extends ConnectConfig {
    userId?: string;
}

export const getReactionByUserArgs = ({
                                          type,
                                          id,
                                          userId
                                      }: GetReactionByUserArgsProps): [DocumentNode, { variables: { where: { [p: string]: { equals: string | null } } } }] => [
    reactionByUserQuery(getTableNameByConnectType(type)), {
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