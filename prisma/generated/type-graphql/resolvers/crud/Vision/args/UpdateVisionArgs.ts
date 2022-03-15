import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisionUpdateInput } from "../../../inputs/VisionUpdateInput";
import { VisionWhereUniqueInput } from "../../../inputs/VisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVisionArgs {
  @TypeGraphQL.Field(_type => VisionUpdateInput, {
    nullable: false
  })
  data!: VisionUpdateInput;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;
}
