import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateManyMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateManyMergeRequestInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope", {
  isAbstract: true
})
export class ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope {
  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateManyMergeRequestInput], {
    nullable: false
  })
  data!: ThreadsOnMergeRequestCreateManyMergeRequestInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
