import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnTimelineCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateOrConnectWithoutThreadInput";
import { ThreadsOnTimelineCreateWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateWithoutThreadInput";
import { ThreadsOnTimelineUpdateWithoutThreadInput } from "../inputs/ThreadsOnTimelineUpdateWithoutThreadInput";
import { ThreadsOnTimelineUpsertWithoutThreadInput } from "../inputs/ThreadsOnTimelineUpsertWithoutThreadInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../inputs/ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnTimelineUpdateOneWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnTimelineUpdateOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutThreadInput, {
    nullable: true
  })
  create?: ThreadsOnTimelineCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: ThreadsOnTimelineCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpsertWithoutThreadInput, {
    nullable: true
  })
  upsert?: ThreadsOnTimelineUpsertWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadsOnTimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateWithoutThreadInput, {
    nullable: true
  })
  update?: ThreadsOnTimelineUpdateWithoutThreadInput | undefined;
}
