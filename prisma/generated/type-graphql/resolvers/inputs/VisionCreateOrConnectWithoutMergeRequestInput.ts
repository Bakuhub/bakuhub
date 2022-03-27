import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutMergeRequestInput } from "../inputs/VisionCreateWithoutMergeRequestInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutMergeRequestInput", {
  isAbstract: true
})
export class VisionCreateOrConnectWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutMergeRequestInput, {
    nullable: false
  })
  create!: VisionCreateWithoutMergeRequestInput;
}
