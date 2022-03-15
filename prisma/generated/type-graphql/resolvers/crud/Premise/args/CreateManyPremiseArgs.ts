import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremiseCreateManyInput } from "../../../inputs/PremiseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPremiseArgs {
  @TypeGraphQL.Field(_type => [PremiseCreateManyInput], {
    nullable: false
  })
  data!: PremiseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
