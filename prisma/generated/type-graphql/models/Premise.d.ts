import { PremisesOnTimelines } from "../models/PremisesOnTimelines";
import { TagsOnPremises } from "../models/TagsOnPremises";
import { ThreadsOnPremise } from "../models/ThreadsOnPremise";
import { User } from "../models/User";
import { Vision } from "../models/Vision";
import { VotesOnPremise } from "../models/VotesOnPremise";
import { PremiseCount } from "../resolvers/outputs/PremiseCount";
export declare class Premise {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt?: Date | null;
    status: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION";
    author?: User | null;
    authorId?: string | null;
    vision?: Vision[];
    premisesOnTimelines?: PremisesOnTimelines[];
    tagsOnPremises?: TagsOnPremises[];
    threadsOnPremise?: ThreadsOnPremise[];
    votesOnPremise?: VotesOnPremise[];
    _count?: PremiseCount | null;
}
