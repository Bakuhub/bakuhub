import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnTimelinesCreateManyTimelineInputEnvelope} from "./TagsOnTimelinesCreateManyTimelineInputEnvelope";
import {TagsOnTimelinesCreateOrConnectWithoutTimelineInput} from "./TagsOnTimelinesCreateOrConnectWithoutTimelineInput";
import {TagsOnTimelinesCreateWithoutTimelineInput} from "./TagsOnTimelinesCreateWithoutTimelineInput";
import {TagsOnTimelinesWhereUniqueInput} from "./TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesCreateNestedManyWithoutTimelineInput", {
    isAbstract: true
})
export class TagsOnTimelinesCreateNestedManyWithoutTimelineInput {
    @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    })
    create?: TagsOnTimelinesCreateWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    })
    connectOrCreate?: TagsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    })
    createMany?: TagsOnTimelinesCreateManyTimelineInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    connect?: TagsOnTimelinesWhereUniqueInput[] | undefined;
}
