import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateActiveVisionOnPremiseArgs } from "./args/UpdateActiveVisionOnPremiseArgs";
import { ActiveVisionOnPremise } from "../../../models/ActiveVisionOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActiveVisionOnPremise)
export class UpdateActiveVisionOnPremiseResolver {
  @TypeGraphQL.Mutation(_returns => ActiveVisionOnPremise, {
    nullable: true
  })
  async updateActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
