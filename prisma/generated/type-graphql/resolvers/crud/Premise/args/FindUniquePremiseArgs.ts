import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremiseWhereUniqueInput } from "../../../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePremiseArgs {
  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;
}