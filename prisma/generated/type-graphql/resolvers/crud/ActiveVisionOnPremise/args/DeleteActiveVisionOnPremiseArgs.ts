import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../../../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteActiveVisionOnPremiseArgs {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseWhereUniqueInput;
}
