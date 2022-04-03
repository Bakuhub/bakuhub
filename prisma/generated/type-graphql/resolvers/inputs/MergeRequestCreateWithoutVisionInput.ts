import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput";
import { MergeRequestStatus } from "../../enums/MergeRequestStatus";

@TypeGraphQL.InputType("MergeRequestCreateWithoutVisionInput", {
  isAbstract: true
})
export class MergeRequestCreateWithoutVisionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => MergeRequestStatus, {
    nullable: true
  })
  status?: "OPEN" | "CLOSE" | "MERGED" | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput, {
    nullable: true
  })
  threadsOnMergeRequest?: ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput | undefined;
}
