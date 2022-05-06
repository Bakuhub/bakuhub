import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnVisionsCreateManyInput } from "../../../inputs/ReactionOnVisionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReactionOnVisionsArgs {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateManyInput], {
    nullable: false
  })
  data!: ReactionOnVisionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
