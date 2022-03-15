import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertActiveVisionOnPremiseArgs } from "./args/UpsertActiveVisionOnPremiseArgs";
import { ActiveVisionOnPremise } from "../../../models/ActiveVisionOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActiveVisionOnPremise)
export class UpsertActiveVisionOnPremiseResolver {
  @TypeGraphQL.Mutation(_returns => ActiveVisionOnPremise, {
    nullable: false
  })
  async upsertActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
