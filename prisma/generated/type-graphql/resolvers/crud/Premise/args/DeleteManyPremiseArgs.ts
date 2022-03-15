import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremiseWhereInput } from "../../../inputs/PremiseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPremiseArgs {
  @TypeGraphQL.Field(_type => PremiseWhereInput, {
    nullable: true
  })
  where?: PremiseWhereInput | undefined;
}
