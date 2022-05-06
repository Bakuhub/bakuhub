import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisionCreateInput } from "../../../inputs/VisionCreateInput";
import { VisionUpdateInput } from "../../../inputs/VisionUpdateInput";
import { VisionWhereUniqueInput } from "../../../inputs/VisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVisionArgs {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateInput, {
    nullable: false
  })
  create!: VisionCreateInput;

  @TypeGraphQL.Field(_type => VisionUpdateInput, {
    nullable: false
  })
  update!: VisionUpdateInput;
}
