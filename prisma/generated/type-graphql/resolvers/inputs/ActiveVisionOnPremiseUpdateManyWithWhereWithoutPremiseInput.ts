import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseScalarWhereInput } from "../inputs/ActiveVisionOnPremiseScalarWhereInput";
import { ActiveVisionOnPremiseUpdateManyMutationInput } from "../inputs/ActiveVisionOnPremiseUpdateManyMutationInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpdateManyWithWhereWithoutPremiseInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpdateManyWithWhereWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseScalarWhereInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseScalarWhereInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActiveVisionOnPremiseUpdateManyMutationInput;
}
