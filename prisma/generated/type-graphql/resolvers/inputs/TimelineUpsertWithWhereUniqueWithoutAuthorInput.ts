import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutAuthorInput } from "../inputs/TimelineCreateWithoutAuthorInput";
import { TimelineUpdateWithoutAuthorInput } from "../inputs/TimelineUpdateWithoutAuthorInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class TimelineUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimelineUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: TimelineUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutAuthorInput;
}
