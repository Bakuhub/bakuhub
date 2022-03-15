import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVisionArgs } from "./args/AggregateVisionArgs";
import { Vision } from "../../../models/Vision";
import { AggregateVision } from "../../outputs/AggregateVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vision)
export class AggregateVisionResolver {
  @TypeGraphQL.Query(_returns => AggregateVision, {
    nullable: false
  })
  async aggregateVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVisionArgs): Promise<AggregateVision> {
    return getPrismaFromContext(ctx).vision.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
