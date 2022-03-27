import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateOrConnectWithoutThreadsOnTimelineInput} from "./TimelineCreateOrConnectWithoutThreadsOnTimelineInput";
import {TimelineCreateWithoutThreadsOnTimelineInput} from "./TimelineCreateWithoutThreadsOnTimelineInput";
import {TimelineWhereUniqueInput} from "./TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateNestedOneWithoutThreadsOnTimelineInput", {
    isAbstract: true
})
export class TimelineCreateNestedOneWithoutThreadsOnTimelineInput {
    @TypeGraphQL.Field(_type => TimelineCreateWithoutThreadsOnTimelineInput, {
        nullable: true
    })
    create?: TimelineCreateWithoutThreadsOnTimelineInput | undefined;

    @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutThreadsOnTimelineInput, {
        nullable: true
    })
    connectOrCreate?: TimelineCreateOrConnectWithoutThreadsOnTimelineInput | undefined;

    @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
        nullable: true
    })
    connect?: TimelineWhereUniqueInput | undefined;
}
