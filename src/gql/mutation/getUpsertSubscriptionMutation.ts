import {gql} from "@apollo/client";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {ConnectType} from "../../types";

export const getUpsertSubscriptionMutation = (type: ConnectType) => {
    const tableName = getTableNameByConnectType(type, true
    );
    const queryString = `
mutation Mutation($where: SubscriptionsOn${tableName}sWhereUniqueInput!, $create: SubscriptionsOn${tableName}sCreateInput!, $update: SubscriptionsOn${tableName}sUpdateInput!) {
  upsertSubscriptionsOn${tableName}s(where: $where, create: $create, update: $update) {
    lastReadAt
  }
}
`;

    return gql(queryString);
};