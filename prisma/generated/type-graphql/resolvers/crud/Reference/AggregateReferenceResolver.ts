import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReferenceArgs } from "./args/AggregateReferenceArgs";
import { Reference } from "../../../models/Reference";
import { AggregateReference } from "../../outputs/AggregateReference";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reference)
export class AggregateReferenceResolver {
  @TypeGraphQL.Query(_returns => AggregateReference, {
    nullable: false
  })
  async aggregateReference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReferenceArgs): Promise<AggregateReference> {
    return getPrismaFromContext(ctx).reference.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
