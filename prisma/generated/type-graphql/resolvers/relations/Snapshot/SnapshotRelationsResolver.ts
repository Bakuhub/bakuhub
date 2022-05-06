import * as TypeGraphQL from "type-graphql";
import { Reference } from "../../../models/Reference";
import { Snapshot } from "../../../models/Snapshot";
import { SnapshotReferencesArgs } from "./args/SnapshotReferencesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Snapshot)
export class SnapshotRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Reference], {
    nullable: false
  })
  async references(@TypeGraphQL.Root() snapshot: Snapshot, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SnapshotReferencesArgs): Promise<Reference[]> {
    return getPrismaFromContext(ctx).snapshot.findUnique({
      where: {
        id: snapshot.id,
      },
    }).references(args);
  }
}
