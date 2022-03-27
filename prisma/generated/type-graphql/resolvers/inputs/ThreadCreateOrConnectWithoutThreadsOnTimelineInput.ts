import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateWithoutThreadsOnTimelineInput} from "./ThreadCreateWithoutThreadsOnTimelineInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutThreadsOnTimelineInput", {
    isAbstract: true
})
export class ThreadCreateOrConnectWithoutThreadsOnTimelineInput {
    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnTimelineInput, {
        nullable: false
    })
    create!: ThreadCreateWithoutThreadsOnTimelineInput;
}
