import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateManyUserInputEnvelope } from "../inputs/VotesOnVisionCreateManyUserInputEnvelope";
import { VotesOnVisionCreateOrConnectWithoutUserInput } from "../inputs/VotesOnVisionCreateOrConnectWithoutUserInput";
import { VotesOnVisionCreateWithoutUserInput } from "../inputs/VotesOnVisionCreateWithoutUserInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class VotesOnVisionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VotesOnVisionCreateWithoutUserInput], {
    nullable: true
  })
  create?: VotesOnVisionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnVisionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnVisionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnVisionWhereUniqueInput[] | undefined;
}
