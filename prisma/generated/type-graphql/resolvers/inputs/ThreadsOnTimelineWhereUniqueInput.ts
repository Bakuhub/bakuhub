import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput} from "./ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput";

@TypeGraphQL.InputType("ThreadsOnTimelineWhereUniqueInput", {
    isAbstract: true
})
export class ThreadsOnTimelineWhereUniqueInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    threadId?: string | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput, {
        nullable: true
    })
    threadId_timelineId?: ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput | undefined;
}
