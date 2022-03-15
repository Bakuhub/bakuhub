import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActiveVisionOnPremiseWhereInput } from "../../../inputs/ActiveVisionOnPremiseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActiveVisionOnPremiseArgs {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereInput, {
    nullable: true
  })
  where?: ActiveVisionOnPremiseWhereInput | undefined;
}
