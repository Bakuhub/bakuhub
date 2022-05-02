import {ConnectType} from "../../types";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {gql} from "@apollo/client";

export const createUpdateManySubscriptionsMutation = (
        connectType: ConnectType
) => {
    const tableName = getTableNameByConnectType(connectType, true);
    const queryString = `
    mutation UpdateManySubscriptionsOn${tableName}s($where: SubscriptionsOn${tableName}sWhereInput, $data: SubscriptionsOn${tableName}sUpdateManyMutationInput!) {
  updateManySubscriptionsOn${tableName}s(where: $where, data: $data) {
    count
  }
}`;
    return gql(queryString);
};