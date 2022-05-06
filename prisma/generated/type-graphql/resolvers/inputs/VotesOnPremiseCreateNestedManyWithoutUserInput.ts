import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateManyUserInputEnvelope } from "../inputs/VotesOnPremiseCreateManyUserInputEnvelope";
import { VotesOnPremiseCreateOrConnectWithoutUserInput } from "../inputs/VotesOnPremiseCreateOrConnectWithoutUserInput";
import { VotesOnPremiseCreateWithoutUserInput } from "../inputs/VotesOnPremiseCreateWithoutUserInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class VotesOnPremiseCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateWithoutUserInput], {
    nullable: true
  })
  create?: VotesOnPremiseCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnPremiseCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnPremiseCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnPremiseWhereUniqueInput[] | undefined;
}
