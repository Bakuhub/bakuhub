import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateOrConnectWithoutThreadsOnPremiseInput";
import { PremiseCreateWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateWithoutThreadsOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedOneWithoutThreadsOnPremiseInput", {
  isAbstract: true
})
export class PremiseCreateNestedOneWithoutThreadsOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutThreadsOnPremiseInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutThreadsOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutThreadsOnPremiseInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutThreadsOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;
}
