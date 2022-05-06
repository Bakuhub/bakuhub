import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremiseCreateInput } from "../../../inputs/PremiseCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePremiseArgs {
  @TypeGraphQL.Field(_type => PremiseCreateInput, {
    nullable: false
  })
  data!: PremiseCreateInput;
}
