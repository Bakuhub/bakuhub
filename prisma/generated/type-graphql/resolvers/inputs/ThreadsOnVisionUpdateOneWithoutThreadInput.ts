import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnVisionCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateOrConnectWithoutThreadInput";
import { ThreadsOnVisionCreateWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateWithoutThreadInput";
import { ThreadsOnVisionUpdateWithoutThreadInput } from "../inputs/ThreadsOnVisionUpdateWithoutThreadInput";
import { ThreadsOnVisionUpsertWithoutThreadInput } from "../inputs/ThreadsOnVisionUpsertWithoutThreadInput";
import { ThreadsOnVisionWhereUniqueInput } from "../inputs/ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnVisionUpdateOneWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnVisionUpdateOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutThreadInput, {
    nullable: true
  })
  create?: ThreadsOnVisionCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: ThreadsOnVisionCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionUpsertWithoutThreadInput, {
    nullable: true
  })
  upsert?: ThreadsOnVisionUpsertWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadsOnVisionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateWithoutThreadInput, {
    nullable: true
  })
  update?: ThreadsOnVisionUpdateWithoutThreadInput | undefined;
}
