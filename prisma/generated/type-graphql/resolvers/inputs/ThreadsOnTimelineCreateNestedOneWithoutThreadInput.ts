import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnTimelineCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateOrConnectWithoutThreadInput";
import { ThreadsOnTimelineCreateWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateWithoutThreadInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../inputs/ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnTimelineCreateNestedOneWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnTimelineCreateNestedOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutThreadInput, {
    nullable: true
  })
  create?: ThreadsOnTimelineCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: ThreadsOnTimelineCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadsOnTimelineWhereUniqueInput | undefined;
}
