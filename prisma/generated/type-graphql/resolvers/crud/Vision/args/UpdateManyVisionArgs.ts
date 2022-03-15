import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisionUpdateManyMutationInput } from "../../../inputs/VisionUpdateManyMutationInput";
import { VisionWhereInput } from "../../../inputs/VisionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVisionArgs {
  @TypeGraphQL.Field(_type => VisionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VisionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VisionWhereInput, {
    nullable: true
  })
  where?: VisionWhereInput | undefined;
}
