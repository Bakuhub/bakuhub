import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManySnapshotArgs } from "./args/FindManySnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Snapshot)
export class FindManySnapshotResolver {
  @TypeGraphQL.Query(_returns => [Snapshot], {
    nullable: false
  })
  async snapshots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySnapshotArgs): Promise<Snapshot[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).snapshot.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
