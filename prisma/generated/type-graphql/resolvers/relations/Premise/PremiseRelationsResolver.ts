import * as TypeGraphQL from "type-graphql";
import { Premise } from "../../../models/Premise";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
import { PremisePremisesOnTimelinesArgs } from "./args/PremisePremisesOnTimelinesArgs";
import { PremiseSubscriptionsOnPremisesArgs } from "./args/PremiseSubscriptionsOnPremisesArgs";
import { PremiseTagsOnPremisesArgs } from "./args/PremiseTagsOnPremisesArgs";
import { PremiseThreadsOnPremiseArgs } from "./args/PremiseThreadsOnPremiseArgs";
import { PremiseVisionArgs } from "./args/PremiseVisionArgs";
import { PremiseVotesOnPremiseArgs } from "./args/PremiseVotesOnPremiseArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Premise)
export class PremiseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async author(@TypeGraphQL.Root() premise: Premise, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).premise.findUnique({
      where: {
        id: premise.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [Vision], {
    nullable: false
  })
  async vision(@TypeGraphQL.Root() premise: Premise, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PremiseVisionArgs): Promise<Vision[]> {
    return getPrismaFromContext(ctx).premise.findUnique({
      where: {
        id: premise.id,
      },
    }).vision(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PremisesOnTimelines], {
    nullable: false
  })
  async premisesOnTimelines(@TypeGraphQL.Root() premise: Premise, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PremisePremisesOnTimelinesArgs): Promise<PremisesOnTimelines[]> {
    return getPrismaFromContext(ctx).premise.findUnique({
      where: {
        id: premise.id,
      },
    }).premisesOnTimelines(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TagsOnPremises], {
    nullable: false
  })
  async tagsOnPremises(@TypeGraphQL.Root() premise: Premise, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PremiseTagsOnPremisesArgs): Promise<TagsOnPremises[]> {
    return getPrismaFromContext(ctx).premise.findUnique({
      where: {
        id: premise.id,
      },
    }).tagsOnPremises(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ThreadsOnPremise], {
    nullable: false
  })
  async threadsOnPremise(@TypeGraphQL.Root() premise: Premise, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PremiseThreadsOnPremiseArgs): Promise<ThreadsOnPremise[]> {
    return getPrismaFromContext(ctx).premise.findUnique({
      where: {
        id: premise.id,
      },
    }).threadsOnPremise(args);
  }

  @TypeGraphQL.FieldResolver(_type => [VotesOnPremise], {
    nullable: false
  })
  async votesOnPremise(@TypeGraphQL.Root() premise: Premise, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PremiseVotesOnPremiseArgs): Promise<VotesOnPremise[]> {
    return getPrismaFromContext(ctx).premise.findUnique({
      where: {
        id: premise.id,
      },
    }).votesOnPremise(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SubscriptionsOnPremises], {
    nullable: false
  })
  async subscriptionsOnPremises(@TypeGraphQL.Root() premise: Premise, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PremiseSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises[]> {
    return getPrismaFromContext(ctx).premise.findUnique({
      where: {
        id: premise.id,
      },
    }).subscriptionsOnPremises(args);
  }
}
