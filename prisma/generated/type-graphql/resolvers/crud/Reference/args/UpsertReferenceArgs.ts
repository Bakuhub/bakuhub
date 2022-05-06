import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferenceCreateInput } from "../../../inputs/ReferenceCreateInput";
import { ReferenceUpdateInput } from "../../../inputs/ReferenceUpdateInput";
import { ReferenceWhereUniqueInput } from "../../../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReferenceArgs {
  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: false
  })
  where!: ReferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReferenceCreateInput, {
    nullable: false
  })
  create!: ReferenceCreateInput;

  @TypeGraphQL.Field(_type => ReferenceUpdateInput, {
    nullable: false
  })
  update!: ReferenceUpdateInput;
}
