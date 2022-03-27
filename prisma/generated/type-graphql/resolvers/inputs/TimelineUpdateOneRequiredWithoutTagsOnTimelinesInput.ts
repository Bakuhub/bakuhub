import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutTagsOnTimelinesInput";
import { TimelineCreateWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateWithoutTagsOnTimelinesInput";
import { TimelineUpdateWithoutTagsOnTimelinesInput } from "../inputs/TimelineUpdateWithoutTagsOnTimelinesInput";
import { TimelineUpsertWithoutTagsOnTimelinesInput } from "../inputs/TimelineUpsertWithoutTagsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput", {
  isAbstract: true
})
export class TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutTagsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutTagsOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutTagsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpsertWithoutTagsOnTimelinesInput, {
    nullable: true
  })
  upsert?: TimelineUpsertWithoutTagsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateWithoutTagsOnTimelinesInput, {
    nullable: true
  })
  update?: TimelineUpdateWithoutTagsOnTimelinesInput | undefined;
}
