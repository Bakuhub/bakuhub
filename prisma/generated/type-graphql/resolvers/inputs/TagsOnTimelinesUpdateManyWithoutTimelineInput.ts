import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnTimelinesCreateManyTimelineInputEnvelope} from "./TagsOnTimelinesCreateManyTimelineInputEnvelope";
import {TagsOnTimelinesCreateOrConnectWithoutTimelineInput} from "./TagsOnTimelinesCreateOrConnectWithoutTimelineInput";
import {TagsOnTimelinesCreateWithoutTimelineInput} from "./TagsOnTimelinesCreateWithoutTimelineInput";
import {TagsOnTimelinesScalarWhereInput} from "./TagsOnTimelinesScalarWhereInput";
import {TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput} from "./TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput";
import {TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput} from "./TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput";
import {TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput} from "./TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput";
import {TagsOnTimelinesWhereUniqueInput} from "./TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpdateManyWithoutTimelineInput", {
    isAbstract: true
})
export class TagsOnTimelinesUpdateManyWithoutTimelineInput {
    @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    })
    create?: TagsOnTimelinesCreateWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    })
    connectOrCreate?: TagsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    })
    upsert?: TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    })
    createMany?: TagsOnTimelinesCreateManyTimelineInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    set?: TagsOnTimelinesWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    disconnect?: TagsOnTimelinesWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    delete?: TagsOnTimelinesWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    connect?: TagsOnTimelinesWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    })
    update?: TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput], {
        nullable: true
    })
    updateMany?: TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput], {
        nullable: true
    })
    deleteMany?: TagsOnTimelinesScalarWhereInput[] | undefined;
}
