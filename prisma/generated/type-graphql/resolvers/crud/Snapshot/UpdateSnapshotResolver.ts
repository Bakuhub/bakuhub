import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateSnapshotArgs } from "./args/UpdateSnapshotArgs";
import { Snapshot } from "../../../models/Snapshot";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Snapshot)
export class UpdateSnapshotResolver {
  @TypeGraphQL.Mutation(_returns => Snapshot, {
    nullable: true
  })
  async updateSnapshot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSnapshotArgs): Promise<Snapshot | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).snapshot.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
