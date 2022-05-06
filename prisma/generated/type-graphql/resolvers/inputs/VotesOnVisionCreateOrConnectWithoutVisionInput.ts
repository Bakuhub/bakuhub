import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateWithoutVisionInput } from "../inputs/VotesOnVisionCreateWithoutVisionInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionCreateOrConnectWithoutVisionInput", {
  isAbstract: true
})
export class VotesOnVisionCreateOrConnectWithoutVisionInput {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateWithoutVisionInput, {
    nullable: false
  })
  create!: VotesOnVisionCreateWithoutVisionInput;
}
