import * as TypeGraphQL from "type-graphql";
import { Reference } from "../../../models/Reference";
import { Snapshot } from "../../../models/Snapshot";
import { Vision } from "../../../models/Vision";
import { ReferenceSnapshotsArgs } from "./args/ReferenceSnapshotsArgs";
import { ReferenceVisionArgs } from "./args/ReferenceVisionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reference)
export class ReferenceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Snapshot], {
    nullable: false
  })
  async snapshots(@TypeGraphQL.Root() reference: Reference, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ReferenceSnapshotsArgs): Promise<Snapshot[]> {
    return getPrismaFromContext(ctx).reference.findUnique({
      where: {
        id: reference.id,
      },
    }).snapshots(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Vision], {
    nullable: false
  })
  async vision(@TypeGraphQL.Root() reference: Reference, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ReferenceVisionArgs): Promise<Vision[]> {
    return getPrismaFromContext(ctx).reference.findUnique({
      where: {
        id: reference.id,
      },
    }).vision(args);
  }
}
