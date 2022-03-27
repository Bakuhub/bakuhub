import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadUpdateWithoutParentThreadInput } from "../inputs/ThreadUpdateWithoutParentThreadInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateWithWhereUniqueWithoutParentThreadInput", {
  isAbstract: true
})
export class ThreadUpdateWithWhereUniqueWithoutParentThreadInput {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadUpdateWithoutParentThreadInput, {
    nullable: false
  })
  data!: ThreadUpdateWithoutParentThreadInput;
}
