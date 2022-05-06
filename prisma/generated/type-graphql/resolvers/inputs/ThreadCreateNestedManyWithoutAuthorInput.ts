import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateManyAuthorInputEnvelope } from "../inputs/ThreadCreateManyAuthorInputEnvelope";
import { ThreadCreateOrConnectWithoutAuthorInput } from "../inputs/ThreadCreateOrConnectWithoutAuthorInput";
import { ThreadCreateWithoutAuthorInput } from "../inputs/ThreadCreateWithoutAuthorInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class ThreadCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ThreadCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ThreadCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput[] | undefined;
}
