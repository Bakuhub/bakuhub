import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadUpdateManyMutationInput } from "../../../inputs/ThreadUpdateManyMutationInput";
import { ThreadWhereInput } from "../../../inputs/ThreadWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyThreadArgs {
  @TypeGraphQL.Field(_type => ThreadUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThreadUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ThreadWhereInput, {
    nullable: true
  })
  where?: ThreadWhereInput | undefined;
}
