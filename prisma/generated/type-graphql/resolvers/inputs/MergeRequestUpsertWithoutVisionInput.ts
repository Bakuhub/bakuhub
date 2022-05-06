import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateWithoutVisionInput } from "../inputs/MergeRequestCreateWithoutVisionInput";
import { MergeRequestUpdateWithoutVisionInput } from "../inputs/MergeRequestUpdateWithoutVisionInput";

@TypeGraphQL.InputType("MergeRequestUpsertWithoutVisionInput", {
  isAbstract: true
})
export class MergeRequestUpsertWithoutVisionInput {
  @TypeGraphQL.Field(_type => MergeRequestUpdateWithoutVisionInput, {
    nullable: false
  })
  update!: MergeRequestUpdateWithoutVisionInput;

  @TypeGraphQL.Field(_type => MergeRequestCreateWithoutVisionInput, {
    nullable: false
  })
  create!: MergeRequestCreateWithoutVisionInput;
}
