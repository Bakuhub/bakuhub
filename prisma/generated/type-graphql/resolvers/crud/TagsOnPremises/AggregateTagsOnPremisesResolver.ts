import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsOnPremisesArgs } from "./args/AggregateTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { AggregateTagsOnPremises } from "../../outputs/AggregateTagsOnPremises";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnPremises)
export class AggregateTagsOnPremisesResolver {
  @TypeGraphQL.Query(_returns => AggregateTagsOnPremises, {
    nullable: false
  })
  async aggregateTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTagsOnPremisesArgs): Promise<AggregateTagsOnPremises> {
    return getPrismaFromContext(ctx).tagsOnPremises.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
