import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateManyPremiseInputEnvelope } from "../inputs/ThreadCreateManyPremiseInputEnvelope";
import { ThreadCreateOrConnectWithoutPremiseInput } from "../inputs/ThreadCreateOrConnectWithoutPremiseInput";
import { ThreadCreateWithoutPremiseInput } from "../inputs/ThreadCreateWithoutPremiseInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedManyWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadCreateNestedManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [ThreadCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: ThreadCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput[] | undefined;
}
