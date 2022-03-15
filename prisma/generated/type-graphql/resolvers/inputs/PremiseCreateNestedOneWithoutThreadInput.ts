import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutThreadInput } from "../inputs/PremiseCreateOrConnectWithoutThreadInput";
import { PremiseCreateWithoutThreadInput } from "../inputs/PremiseCreateWithoutThreadInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedOneWithoutThreadInput", {
  isAbstract: true
})
export class PremiseCreateNestedOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutThreadInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;
}
