import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimelineCreateManyInput } from "../../../inputs/TimelineCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTimelineArgs {
  @TypeGraphQL.Field(_type => [TimelineCreateManyInput], {
    nullable: false
  })
  data!: TimelineCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
