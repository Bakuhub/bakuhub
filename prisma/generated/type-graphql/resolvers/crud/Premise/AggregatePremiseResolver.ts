import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePremiseArgs } from "./args/AggregatePremiseArgs";
import { Premise } from "../../../models/Premise";
import { AggregatePremise } from "../../outputs/AggregatePremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Premise)
export class AggregatePremiseResolver {
  @TypeGraphQL.Query(_returns => AggregatePremise, {
    nullable: false
  })
  async aggregatePremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePremiseArgs): Promise<AggregatePremise> {
    return getPrismaFromContext(ctx).premise.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
