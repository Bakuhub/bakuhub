import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimelineWhereInput } from "../../../inputs/TimelineWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTimelineArgs {
  @TypeGraphQL.Field(_type => TimelineWhereInput, {
    nullable: true
  })
  where?: TimelineWhereInput | undefined;
}
