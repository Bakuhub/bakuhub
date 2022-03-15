import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActiveVisionOnPremiseUpdateManyMutationInput } from "../../../inputs/ActiveVisionOnPremiseUpdateManyMutationInput";
import { ActiveVisionOnPremiseWhereInput } from "../../../inputs/ActiveVisionOnPremiseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActiveVisionOnPremiseArgs {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActiveVisionOnPremiseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereInput, {
    nullable: true
  })
  where?: ActiveVisionOnPremiseWhereInput | undefined;
}
