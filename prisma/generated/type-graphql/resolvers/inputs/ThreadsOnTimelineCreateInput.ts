import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateNestedOneWithoutThreadsOnTimelineInput} from "./ThreadCreateNestedOneWithoutThreadsOnTimelineInput";
import {TimelineCreateNestedOneWithoutThreadsOnTimelineInput} from "./TimelineCreateNestedOneWithoutThreadsOnTimelineInput";

@TypeGraphQL.InputType("ThreadsOnTimelineCreateInput", {
    isAbstract: true
})
export class ThreadsOnTimelineCreateInput {
    @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnTimelineInput, {
        nullable: false
    })
    thread!: ThreadCreateNestedOneWithoutThreadsOnTimelineInput;

    @TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutThreadsOnTimelineInput, {
        nullable: false
    })
    timeline!: TimelineCreateNestedOneWithoutThreadsOnTimelineInput;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    assignedAt?: Date | undefined;
}
