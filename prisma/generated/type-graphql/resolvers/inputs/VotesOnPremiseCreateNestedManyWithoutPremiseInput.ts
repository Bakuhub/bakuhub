import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateManyPremiseInputEnvelope } from "../inputs/VotesOnPremiseCreateManyPremiseInputEnvelope";
import { VotesOnPremiseCreateOrConnectWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateOrConnectWithoutPremiseInput";
import { VotesOnPremiseCreateWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateWithoutPremiseInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseCreateNestedManyWithoutPremiseInput", {
  isAbstract: true
})
export class VotesOnPremiseCreateNestedManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: VotesOnPremiseCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnPremiseCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnPremiseWhereUniqueInput[] | undefined;
}
