import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsOnTimelinesArgs } from "./args/AggregateTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { AggregateTagsOnTimelines } from "../../outputs/AggregateTagsOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnTimelines)
export class AggregateTagsOnTimelinesResolver {
  @TypeGraphQL.Query(_returns => AggregateTagsOnTimelines, {
    nullable: false
  })
  async aggregateTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTagsOnTimelinesArgs): Promise<AggregateTagsOnTimelines> {
    return getPrismaFromContext(ctx).tagsOnTimelines.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
