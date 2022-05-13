import { MergeRequest } from "../models/MergeRequest";
import { Premise } from "../models/Premise";
import { ReactionOnVisions } from "../models/ReactionOnVisions";
import { Reference } from "../models/Reference";
import { TagsOnVisions } from "../models/TagsOnVisions";
import { ThreadsOnVision } from "../models/ThreadsOnVision";
import { User } from "../models/User";
import { VisionViewsHistory } from "../models/VisionViewsHistory";
import { VotesOnVision } from "../models/VotesOnVision";
import { VisionCount } from "../resolvers/outputs/VisionCount";
export declare class Vision {
    id: string;
    title: string;
    activityDate?: Date | null;
    description?: string | null;
    updatedAt: Date;
    createdAt: Date;
    reference?: Reference | null;
    referenceId?: string | null;
    author?: User | null;
    authorId?: string | null;
    premise?: Premise;
    thumbnail?: string | null;
    premiseId: string;
    draftMode: boolean;
    prevVisionId?: string | null;
    prevVision?: Vision | null;
    nextVisions?: Vision[];
    threadsOnVision?: ThreadsOnVision[];
    mergeRequest?: MergeRequest | null;
    reactionOnVisions?: ReactionOnVisions[];
    votesOnVision?: VotesOnVision[];
    tagsOnVisions?: TagsOnVisions[];
    visionViewsHistory?: VisionViewsHistory[];
    _count?: VisionCount | null;
}
