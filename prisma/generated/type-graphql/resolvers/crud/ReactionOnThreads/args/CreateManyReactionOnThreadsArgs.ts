import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnThreadsCreateManyInput } from "../../../inputs/ReactionOnThreadsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReactionOnThreadsArgs {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateManyInput], {
    nullable: false
  })
  data!: ReactionOnThreadsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
