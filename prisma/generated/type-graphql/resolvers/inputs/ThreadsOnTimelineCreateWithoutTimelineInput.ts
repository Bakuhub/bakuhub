import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateNestedOneWithoutThreadsOnTimelineInput} from "./ThreadCreateNestedOneWithoutThreadsOnTimelineInput";

@TypeGraphQL.InputType("ThreadsOnTimelineCreateWithoutTimelineInput", {
    isAbstract: true
})
export class ThreadsOnTimelineCreateWithoutTimelineInput {
    @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnTimelineInput, {
        nullable: false
    })
    thread!: ThreadCreateNestedOneWithoutThreadsOnTimelineInput;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    assignedAt?: Date | undefined;
}
