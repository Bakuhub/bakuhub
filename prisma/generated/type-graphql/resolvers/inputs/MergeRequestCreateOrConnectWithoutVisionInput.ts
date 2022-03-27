import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateWithoutVisionInput } from "../inputs/MergeRequestCreateWithoutVisionInput";
import { MergeRequestWhereUniqueInput } from "../inputs/MergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("MergeRequestCreateOrConnectWithoutVisionInput", {
  isAbstract: true
})
export class MergeRequestCreateOrConnectWithoutVisionInput {
  @TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: MergeRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => MergeRequestCreateWithoutVisionInput, {
    nullable: false
  })
  create!: MergeRequestCreateWithoutVisionInput;
}
