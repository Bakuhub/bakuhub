import { MergeRequest } from "../../../models/MergeRequest";
import { Premise } from "../../../models/Premise";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
import { Reference } from "../../../models/Reference";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { VisionViewsHistory } from "../../../models/VisionViewsHistory";
import { VotesOnVision } from "../../../models/VotesOnVision";
import { VisionNextVisionsArgs } from "./args/VisionNextVisionsArgs";
import { VisionReactionOnVisionsArgs } from "./args/VisionReactionOnVisionsArgs";
import { VisionTagsOnVisionsArgs } from "./args/VisionTagsOnVisionsArgs";
import { VisionThreadsOnVisionArgs } from "./args/VisionThreadsOnVisionArgs";
import { VisionVisionViewsHistoryArgs } from "./args/VisionVisionViewsHistoryArgs";
import { VisionVotesOnVisionArgs } from "./args/VisionVotesOnVisionArgs";
export declare class VisionRelationsResolver {
    reference(vision: Vision, ctx: any): Promise<Reference | null>;
    author(vision: Vision, ctx: any): Promise<User | null>;
    premise(vision: Vision, ctx: any): Promise<Premise>;
    prevVision(vision: Vision, ctx: any): Promise<Vision | null>;
    nextVisions(vision: Vision, ctx: any, args: VisionNextVisionsArgs): Promise<Vision[]>;
    threadsOnVision(vision: Vision, ctx: any, args: VisionThreadsOnVisionArgs): Promise<ThreadsOnVision[]>;
    mergeRequest(vision: Vision, ctx: any): Promise<MergeRequest | null>;
    reactionOnVisions(vision: Vision, ctx: any, args: VisionReactionOnVisionsArgs): Promise<ReactionOnVisions[]>;
    votesOnVision(vision: Vision, ctx: any, args: VisionVotesOnVisionArgs): Promise<VotesOnVision[]>;
    tagsOnVisions(vision: Vision, ctx: any, args: VisionTagsOnVisionsArgs): Promise<TagsOnVisions[]>;
    visionViewsHistory(vision: Vision, ctx: any, args: VisionVisionViewsHistoryArgs): Promise<VisionViewsHistory[]>;
}
