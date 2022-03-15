import * as TypeGraphQL from "type-graphql";
import { Premise } from "../../../models/Premise";
import { Tag } from "../../../models/Tag";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnPremises)
export class TagsOnPremisesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false
  })
  async tag(@TypeGraphQL.Root() tagsOnPremises: TagsOnPremises, @TypeGraphQL.Ctx() ctx: any): Promise<Tag> {
    return getPrismaFromContext(ctx).tagsOnPremises.findUnique({
      where: {
        tagId_premiseId: {
          tagId: tagsOnPremises.tagId,
          premiseId: tagsOnPremises.premiseId,
        },
      },
    }).tag({});
  }

  @TypeGraphQL.FieldResolver(_type => Premise, {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() tagsOnPremises: TagsOnPremises, @TypeGraphQL.Ctx() ctx: any): Promise<Premise> {
    return getPrismaFromContext(ctx).tagsOnPremises.findUnique({
      where: {
        tagId_premiseId: {
          tagId: tagsOnPremises.tagId,
          premiseId: tagsOnPremises.premiseId,
        },
      },
    }).premise({});
  }
}
