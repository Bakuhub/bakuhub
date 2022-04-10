import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {ConnectConfig} from "../../types";
import {Reaction} from "../../../prisma/generated/type-graphql";
import {getTableNameWithId} from "../../utils/getTableNameWithId";


export interface ReactionConnectConfig extends ConnectConfig {
    reaction: Reaction;
    userId: string;
}

export interface CreateReactionVariables {
    variables: { create: { [p: string]: Reaction | { connect: { id: string } }; reaction: Reaction; user: { connect: { id: string } } }; update: { reaction: { set: Reaction } }; where: { userId_visionId: { [p: string]: string | null; userId: string } } };
}

export const getCreateReactionVariables = ({
                                               type,
                                               id,
                                               reaction,
                                               userId
                                           }: ReactionConnectConfig): CreateReactionVariables => {
    const tableName = getTableNameByConnectType(type);
    const tableNameWithId = getTableNameWithId(tableName);
    return <CreateReactionVariables>{
        variables: {
            "where": {
                [`userId_${tableNameWithId}`]: {
                    userId,
                    [`${tableName}Id`]: id
                }
            },
            create: {
                reaction,
                "user": {
                    "connect": {
                        "id": userId
                    }
                },
                [tableName]: {
                    "connect": {
                        id: id as string
                    }
                }
            },
            "update": {
                "reaction": {
                    "set": reaction
                }
            }
        },
    };
};