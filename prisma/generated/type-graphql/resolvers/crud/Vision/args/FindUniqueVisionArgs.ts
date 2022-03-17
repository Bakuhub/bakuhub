import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisionWhereUniqueInput } from "../../../inputs/VisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVisionArgs {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;
}