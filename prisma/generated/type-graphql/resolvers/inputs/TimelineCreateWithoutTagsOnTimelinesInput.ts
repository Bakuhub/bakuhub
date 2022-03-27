import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCreateNestedManyWithoutTimelineInput} from "./PremisesOnTimelinesCreateNestedManyWithoutTimelineInput";
import {ThreadsOnTimelineCreateNestedManyWithoutTimelineInput} from "./ThreadsOnTimelineCreateNestedManyWithoutTimelineInput";
import {UserCreateNestedOneWithoutTimelineInput} from "./UserCreateNestedOneWithoutTimelineInput";

@TypeGraphQL.InputType("TimelineCreateWithoutTagsOnTimelinesInput", {
    isAbstract: true
})
export class TimelineCreateWithoutTagsOnTimelinesInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    id?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    title!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    description!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    status!: string;

    @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTimelineInput, {
        nullable: false
    })
    author!: UserCreateNestedOneWithoutTimelineInput;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    })
    premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    })
    threadsOnTimeline?: ThreadsOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
}
