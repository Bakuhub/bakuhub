import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutThreadInput } from "../inputs/PremiseCreateNestedOneWithoutThreadInput";
import { ThreadCreateNestedManyWithoutParentThreadInput } from "../inputs/ThreadCreateNestedManyWithoutParentThreadInput";
import { ThreadCreateNestedOneWithoutChildThreadsInput } from "../inputs/ThreadCreateNestedOneWithoutChildThreadsInput";

@TypeGraphQL.InputType("ThreadCreateInput", {
  isAbstract: true
})
export class ThreadCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  activityDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reference!: string;

  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutThreadInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutThreadInput;

  @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutChildThreadsInput, {
    nullable: true
  })
  parentThread?: ThreadCreateNestedOneWithoutChildThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutParentThreadInput, {
    nullable: true
  })
  childThreads?: ThreadCreateNestedManyWithoutParentThreadInput | undefined;
}
