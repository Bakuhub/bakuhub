import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSnapshotArgs } from "./args/AggregateSnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
import { AggregateSnapshot } from "../../outputs/AggregateSnapshot";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Snapshot)
export class AggregateSnapshotResolver {
  @TypeGraphQL.Query(_returns => AggregateSnapshot, {
    nullable: false
  })
  async aggregateSnapshot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSnapshotArgs): Promise<AggregateSnapshot> {
    return getPrismaFromContext(ctx).snapshot.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
