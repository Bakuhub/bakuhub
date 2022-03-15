import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActiveVisionOnPremiseCreateInput } from "../../../inputs/ActiveVisionOnPremiseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActiveVisionOnPremiseArgs {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateInput, {
    nullable: false
  })
  data!: ActiveVisionOnPremiseCreateInput;
}
