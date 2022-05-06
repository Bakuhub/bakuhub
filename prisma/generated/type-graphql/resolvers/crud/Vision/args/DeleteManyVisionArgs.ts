import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisionWhereInput } from "../../../inputs/VisionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVisionArgs {
  @TypeGraphQL.Field(_type => VisionWhereInput, {
    nullable: true
  })
  where?: VisionWhereInput | undefined;
}
