import {gql} from "@apollo/client";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {ConnectType} from "../../types";

export const getCreateVoteMutation = (type: ConnectType) => {
    const tableName = getTableNameByConnectType(type, true
    );
    const queryString = `
    mutation Mutation($where: VotesOn${tableName}WhereUniqueInput!, $create: VotesOn${tableName}CreateInput!, $update: VotesOn${tableName}UpdateInput!) {
        upsertVotesOn${tableName}(where: $where, create: $create, update: $update) {
            vote
        }
    }
`;

    return gql(queryString);
};