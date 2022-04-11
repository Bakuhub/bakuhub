import {ConnectConfig} from "../../types";
import {DocumentNode} from "graphql";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {capitalize} from "@mui/material";
import {gql} from "@apollo/client";

const voteByUserQuery = (tableName: string) => {
    const queryString = `
query VotesOn${capitalize(tableName)}($where: VotesOn${capitalize(tableName)}WhereUniqueInput!) {
votes:  votesOn${capitalize(tableName)}(where: $where) {
    vote
  }
}
`;
    return gql(queryString);
};

export interface GetVoteByUserArgsProps extends ConnectConfig {
    userId: string;
}

export const getVoteByUserArgs = ({
                                      type,
                                      id,
                                      userId
                                  }: GetVoteByUserArgsProps): [DocumentNode, { variables: { where: { [p: string]: { [p: string]: string | null | undefined; userId: string } } } }] => [
    voteByUserQuery(getTableNameByConnectType(type)), {
        variables: {
            "where": {
                [`userId_${getTableNameByConnectType(type)}Id`]: {
                    userId,
                    [`${getTableNameByConnectType(type)}Id`]: id
                },
            }
        }
    }
];
