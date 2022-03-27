import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateWithoutAuthorInput} from "./ThreadCreateWithoutAuthorInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutAuthorInput", {
    isAbstract: true
})
export class ThreadCreateOrConnectWithoutAuthorInput {
    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadCreateWithoutAuthorInput, {
        nullable: false
    })
    create!: ThreadCreateWithoutAuthorInput;
}
