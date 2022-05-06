import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestStatus } from "../../enums/MergeRequestStatus";

@TypeGraphQL.InputType("EnumMergeRequestStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumMergeRequestStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => MergeRequestStatus, {
    nullable: true
  })
  set?: "OPEN" | "CLOSE" | "MERGED" | undefined;
}
