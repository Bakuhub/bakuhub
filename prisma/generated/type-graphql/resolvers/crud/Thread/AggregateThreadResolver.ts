import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadArgs } from "./args/AggregateThreadArgs";
import { Thread } from "../../../models/Thread";
import { AggregateThread } from "../../outputs/AggregateThread";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Thread)
export class AggregateThreadResolver {
  @TypeGraphQL.Query(_returns => AggregateThread, {
    nullable: false
  })
  async aggregateThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThreadArgs): Promise<AggregateThread> {
    return getPrismaFromContext(ctx).thread.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
