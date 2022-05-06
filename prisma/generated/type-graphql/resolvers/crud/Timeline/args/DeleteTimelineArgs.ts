import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimelineWhereUniqueInput } from "../../../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTimelineArgs {
  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;
}
