import { PremisesOnTimelines } from "../models/PremisesOnTimelines";
import { ReactionOnTimelines } from "../models/ReactionOnTimelines";
import { TagsOnTimelines } from "../models/TagsOnTimelines";
import { ThreadsOnTimeline } from "../models/ThreadsOnTimeline";
import { User } from "../models/User";
import { VotesOnTimeline } from "../models/VotesOnTimeline";
import { TimelineCount } from "../resolvers/outputs/TimelineCount";
export declare class Timeline {
    id: string;
    title: string;
    description: string;
    status: string;
    author?: User;
    authorId: string;
    premisesOnTimelines?: PremisesOnTimelines[];
    tagsOnTimelines?: TagsOnTimelines[];
    threadsOnTimeline?: ThreadsOnTimeline[];
    ReactionOnTimelines?: ReactionOnTimelines[];
    votesOnTimeline?: VotesOnTimeline[];
    _count?: TimelineCount | null;
}
