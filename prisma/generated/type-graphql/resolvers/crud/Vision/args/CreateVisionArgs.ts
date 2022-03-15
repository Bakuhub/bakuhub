import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisionCreateInput } from "../../../inputs/VisionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVisionArgs {
  @TypeGraphQL.Field(_type => VisionCreateInput, {
    nullable: false
  })
  data!: VisionCreateInput;
}
