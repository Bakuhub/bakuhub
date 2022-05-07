import {resolvers} from "../prisma/generated/type-graphql";
import {buildSchemaSync} from "type-graphql";

export function createSchema() {
    return buildSchemaSync({
                               resolvers,
                               emitSchemaFile: false,
                               validate: false,
                           });
}
