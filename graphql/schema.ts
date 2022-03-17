import {buildSchema} from "type-graphql";
import {resolvers} from "../prisma/generated/type-graphql";

export async function createSchema() {
    return await buildSchema({
        resolvers: resolvers,
        emitSchemaFile: true,
        validate: false,
    });
}
