import * as TypeGraphQL from "type-graphql";
import { MergeRequest } from "../../../models/MergeRequest";
import { Premise } from "../../../models/Premise";
import { ReactionOnVision } from "../../../models/ReactionOnVision";
import { Reference } from "../../../models/Reference";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { VisionNextVisionsArgs } from "./args/VisionNextVisionsArgs";
import { VisionReactionOnVisionArgs } from "./args/VisionReactionOnVisionArgs";
import { VisionThreadsOnVisionArgs } from "./args/VisionThreadsOnVisionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vision)
export class VisionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Reference, {
    nullable: true
  })
  async reference(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any): Promise<Reference | null> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).reference({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async author(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Premise, {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any): Promise<Premise> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).premise({});
  }

  @TypeGraphQL.FieldResolver(_type => Vision, {
    nullable: true
  })
  async prevVision(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any): Promise<Vision | null> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).prevVision({});
  }

  @TypeGraphQL.FieldResolver(_type => [Vision], {
    nullable: false
  })
  async nextVisions(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: VisionNextVisionsArgs): Promise<Vision[]> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).nextVisions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ThreadsOnVision], {
    nullable: false
  })
  async threadsOnVision(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: VisionThreadsOnVisionArgs): Promise<ThreadsOnVision[]> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).threadsOnVision(args);
  }

  @TypeGraphQL.FieldResolver(_type => MergeRequest, {
    nullable: true
  })
  async mergeRequest(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any): Promise<MergeRequest | null> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).mergeRequest({});
  }

  @TypeGraphQL.FieldResolver(_type => [ReactionOnVision], {
    nullable: false
  })
  async ReactionOnVision(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: VisionReactionOnVisionArgs): Promise<ReactionOnVision[]> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).ReactionOnVision(args);
  }
}
