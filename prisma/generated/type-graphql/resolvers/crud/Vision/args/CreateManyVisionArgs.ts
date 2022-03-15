import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisionCreateManyInput } from "../../../inputs/VisionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVisionArgs {
  @TypeGraphQL.Field(_type => [VisionCreateManyInput], {
    nullable: false
  })
  data!: VisionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
