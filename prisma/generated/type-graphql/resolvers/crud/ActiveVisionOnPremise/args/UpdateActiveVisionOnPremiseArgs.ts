import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActiveVisionOnPremiseUpdateInput } from "../../../inputs/ActiveVisionOnPremiseUpdateInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../../../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActiveVisionOnPremiseArgs {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateInput, {
    nullable: false
  })
  data!: ActiveVisionOnPremiseUpdateInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseWhereUniqueInput;
}
