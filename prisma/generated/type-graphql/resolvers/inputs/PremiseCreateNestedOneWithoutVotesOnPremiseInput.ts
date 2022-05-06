import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateOrConnectWithoutVotesOnPremiseInput";
import { PremiseCreateWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateWithoutVotesOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedOneWithoutVotesOnPremiseInput", {
  isAbstract: true
})
export class PremiseCreateNestedOneWithoutVotesOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutVotesOnPremiseInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutVotesOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutVotesOnPremiseInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutVotesOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;
}
