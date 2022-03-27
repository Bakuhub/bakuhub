import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnTimelineCreateWithoutTimelineInput} from "./ThreadsOnTimelineCreateWithoutTimelineInput";
import {ThreadsOnTimelineUpdateWithoutTimelineInput} from "./ThreadsOnTimelineUpdateWithoutTimelineInput";
import {ThreadsOnTimelineWhereUniqueInput} from "./ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput", {
    isAbstract: true
})
export class ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput {
    @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadsOnTimelineWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateWithoutTimelineInput, {
        nullable: false
    })
    update!: ThreadsOnTimelineUpdateWithoutTimelineInput;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutTimelineInput, {
        nullable: false
    })
    create!: ThreadsOnTimelineCreateWithoutTimelineInput;
}
