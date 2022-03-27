import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferenceUpdateInput } from "../../../inputs/ReferenceUpdateInput";
import { ReferenceWhereUniqueInput } from "../../../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReferenceArgs {
  @TypeGraphQL.Field(_type => ReferenceUpdateInput, {
    nullable: false
  })
  data!: ReferenceUpdateInput;

  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: false
  })
  where!: ReferenceWhereUniqueInput;
}
