import * as TypeGraphQL from "type-graphql";
import { MergeRequest } from "../../../models/MergeRequest";
import { Vision } from "../../../models/Vision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MergeRequest)
export class MergeRequestRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Vision, {
    nullable: false
  })
  async vision(@TypeGraphQL.Root() mergeRequest: MergeRequest, @TypeGraphQL.Ctx() ctx: any): Promise<Vision> {
    return getPrismaFromContext(ctx).mergeRequest.findUnique({
      where: {
        id: mergeRequest.id,
      },
    }).vision({});
  }
}
