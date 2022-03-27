import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnPremiseCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnPremiseCreateOrConnectWithoutThreadInput";
import { ThreadsOnPremiseCreateWithoutThreadInput } from "../inputs/ThreadsOnPremiseCreateWithoutThreadInput";
import { ThreadsOnPremiseUpdateWithoutThreadInput } from "../inputs/ThreadsOnPremiseUpdateWithoutThreadInput";
import { ThreadsOnPremiseUpsertWithoutThreadInput } from "../inputs/ThreadsOnPremiseUpsertWithoutThreadInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../inputs/ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnPremiseUpdateOneWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnPremiseUpdateOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutThreadInput, {
    nullable: true
  })
  create?: ThreadsOnPremiseCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: ThreadsOnPremiseCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseUpsertWithoutThreadInput, {
    nullable: true
  })
  upsert?: ThreadsOnPremiseUpsertWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadsOnPremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateWithoutThreadInput, {
    nullable: true
  })
  update?: ThreadsOnPremiseUpdateWithoutThreadInput | undefined;
}
