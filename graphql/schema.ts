import {buildSchema} from "type-graphql";
import {resolvers} from "@generated/type-graphql";

export async function createSchema() {
    return await buildSchema({
        resolvers,
        emitSchemaFile: true,
        validate: false,
    });
}
