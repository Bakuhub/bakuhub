import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnVisionCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateOrConnectWithoutThreadInput";
import { ThreadsOnVisionCreateWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateWithoutThreadInput";
import { ThreadsOnVisionWhereUniqueInput } from "../inputs/ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnVisionCreateNestedOneWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnVisionCreateNestedOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutThreadInput, {
    nullable: true
  })
  create?: ThreadsOnVisionCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: ThreadsOnVisionCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadsOnVisionWhereUniqueInput | undefined;
}
