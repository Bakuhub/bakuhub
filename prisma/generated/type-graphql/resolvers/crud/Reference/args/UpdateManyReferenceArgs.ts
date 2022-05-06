import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferenceUpdateManyMutationInput } from "../../../inputs/ReferenceUpdateManyMutationInput";
import { ReferenceWhereInput } from "../../../inputs/ReferenceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReferenceArgs {
  @TypeGraphQL.Field(_type => ReferenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReferenceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReferenceWhereInput, {
    nullable: true
  })
  where?: ReferenceWhereInput | undefined;
}
