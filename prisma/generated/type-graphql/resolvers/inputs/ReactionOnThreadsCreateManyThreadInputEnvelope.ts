import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateManyThreadInput } from "../inputs/ReactionOnThreadsCreateManyThreadInput";

@TypeGraphQL.InputType("ReactionOnThreadsCreateManyThreadInputEnvelope", {
  isAbstract: true
})
export class ReactionOnThreadsCreateManyThreadInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateManyThreadInput], {
    nullable: false
  })
  data!: ReactionOnThreadsCreateManyThreadInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
