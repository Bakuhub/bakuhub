import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActiveVisionOnPremiseCreateInput } from "../../../inputs/ActiveVisionOnPremiseCreateInput";
import { ActiveVisionOnPremiseUpdateInput } from "../../../inputs/ActiveVisionOnPremiseUpdateInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../../../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActiveVisionOnPremiseArgs {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateInput, {
    nullable: false
  })
  create!: ActiveVisionOnPremiseCreateInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateInput, {
    nullable: false
  })
  update!: ActiveVisionOnPremiseUpdateInput;
}
