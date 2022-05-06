import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineUpdateWithoutAuthorInput } from "../inputs/TimelineUpdateWithoutAuthorInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class TimelineUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimelineUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: TimelineUpdateWithoutAuthorInput;
}
