import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnVisionUpdateManyMutationInput } from "../../../inputs/ThreadsOnVisionUpdateManyMutationInput";
import { ThreadsOnVisionWhereInput } from "../../../inputs/ThreadsOnVisionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyThreadsOnVisionArgs {
  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThreadsOnVisionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput, {
    nullable: true
  })
  where?: ThreadsOnVisionWhereInput | undefined;
}
