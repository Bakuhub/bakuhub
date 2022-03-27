import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnPremiseWhereInput } from "../inputs/ThreadsOnPremiseWhereInput";

@TypeGraphQL.InputType("ThreadsOnPremiseRelationFilter", {
  isAbstract: true
})
export class ThreadsOnPremiseRelationFilter {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput, {
    nullable: true
  })
  is?: ThreadsOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput, {
    nullable: true
  })
  isNot?: ThreadsOnPremiseWhereInput | undefined;
}
