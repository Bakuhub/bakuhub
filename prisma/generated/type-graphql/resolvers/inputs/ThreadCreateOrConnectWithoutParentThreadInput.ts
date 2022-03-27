import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateWithoutParentThreadInput} from "./ThreadCreateWithoutParentThreadInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutParentThreadInput", {
    isAbstract: true
})
export class ThreadCreateOrConnectWithoutParentThreadInput {
    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadCreateWithoutParentThreadInput, {
        nullable: false
    })
    create!: ThreadCreateWithoutParentThreadInput;
}
