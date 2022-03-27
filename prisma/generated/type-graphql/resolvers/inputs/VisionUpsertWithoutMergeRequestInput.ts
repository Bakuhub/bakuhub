import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutMergeRequestInput } from "../inputs/VisionCreateWithoutMergeRequestInput";
import { VisionUpdateWithoutMergeRequestInput } from "../inputs/VisionUpdateWithoutMergeRequestInput";

@TypeGraphQL.InputType("VisionUpsertWithoutMergeRequestInput", {
  isAbstract: true
})
export class VisionUpsertWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => VisionUpdateWithoutMergeRequestInput, {
    nullable: false
  })
  update!: VisionUpdateWithoutMergeRequestInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutMergeRequestInput, {
    nullable: false
  })
  create!: VisionCreateWithoutMergeRequestInput;
}
