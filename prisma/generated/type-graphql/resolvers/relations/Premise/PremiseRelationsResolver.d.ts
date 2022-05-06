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
export declare class PremiseRelationsResolver {
    author(premise: Premise, ctx: any): Promise<User | null>;
    vision(premise: Premise, ctx: any, args: PremiseVisionArgs): Promise<Vision[]>;
    premisesOnTimelines(premise: Premise, ctx: any, args: PremisePremisesOnTimelinesArgs): Promise<PremisesOnTimelines[]>;
    tagsOnPremises(premise: Premise, ctx: any, args: PremiseTagsOnPremisesArgs): Promise<TagsOnPremises[]>;
    threadsOnPremise(premise: Premise, ctx: any, args: PremiseThreadsOnPremiseArgs): Promise<ThreadsOnPremise[]>;
    votesOnPremise(premise: Premise, ctx: any, args: PremiseVotesOnPremiseArgs): Promise<VotesOnPremise[]>;
    subscriptionsOnPremises(premise: Premise, ctx: any, args: PremiseSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises[]>;
}
