import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceScalarWhereInput } from "../inputs/ReferenceScalarWhereInput";
import { ReferenceUpdateManyMutationInput } from "../inputs/ReferenceUpdateManyMutationInput";

@TypeGraphQL.InputType("ReferenceUpdateManyWithWhereWithoutSnapshotsInput", {
  isAbstract: true
})
export class ReferenceUpdateManyWithWhereWithoutSnapshotsInput {
  @TypeGraphQL.Field(_type => ReferenceScalarWhereInput, {
    nullable: false
  })
  where!: ReferenceScalarWhereInput;

  @TypeGraphQL.Field(_type => ReferenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReferenceUpdateManyMutationInput;
}
