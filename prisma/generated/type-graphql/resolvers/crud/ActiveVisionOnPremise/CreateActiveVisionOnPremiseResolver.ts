import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateActiveVisionOnPremiseArgs } from "./args/CreateActiveVisionOnPremiseArgs";
import { ActiveVisionOnPremise } from "../../../models/ActiveVisionOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActiveVisionOnPremise)
export class CreateActiveVisionOnPremiseResolver {
  @TypeGraphQL.Mutation(_returns => ActiveVisionOnPremise, {
    nullable: false
  })
  async createActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
