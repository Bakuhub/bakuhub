import {resolvers} from "../prisma/generated/type-graphql";
import {buildSchemaSync} from "type-graphql/dist/utils/buildSchema";

export function createSchema() {
    // return await buildTypeDefsAndResolvers({
    //                                            resolvers,
    //                                            emitSchemaFile: true,
    //                                            validate: false
    //                                        });
    return buildSchemaSync({
                               resolvers,
                               emitSchemaFile: false,
                               validate: false,
                           });
}
