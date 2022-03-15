import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateActiveVisionOnPremiseArgs } from "./args/AggregateActiveVisionOnPremiseArgs";
import { ActiveVisionOnPremise } from "../../../models/ActiveVisionOnPremise";
import { AggregateActiveVisionOnPremise } from "../../outputs/AggregateActiveVisionOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActiveVisionOnPremise)
export class AggregateActiveVisionOnPremiseResolver {
  @TypeGraphQL.Query(_returns => AggregateActiveVisionOnPremise, {
    nullable: false
  })
  async aggregateActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActiveVisionOnPremiseArgs): Promise<AggregateActiveVisionOnPremise> {
    return getPrismaFromContext(ctx).activeVisionOnPremise.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
