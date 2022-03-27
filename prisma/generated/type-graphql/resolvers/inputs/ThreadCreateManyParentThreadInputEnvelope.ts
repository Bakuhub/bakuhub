import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateManyParentThreadInput } from "../inputs/ThreadCreateManyParentThreadInput";

@TypeGraphQL.InputType("ThreadCreateManyParentThreadInputEnvelope", {
  isAbstract: true
})
export class ThreadCreateManyParentThreadInputEnvelope {
  @TypeGraphQL.Field(_type => [ThreadCreateManyParentThreadInput], {
    nullable: false
  })
  data!: ThreadCreateManyParentThreadInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
