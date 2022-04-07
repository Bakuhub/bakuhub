import { Account } from "../models/Account";
import { Premise } from "../models/Premise";
import { ReactionOnThreads } from "../models/ReactionOnThreads";
import { ReactionOnTimelines } from "../models/ReactionOnTimelines";
import { ReactionOnVisions } from "../models/ReactionOnVisions";
import { Session } from "../models/Session";
import { Thread } from "../models/Thread";
import { Timeline } from "../models/Timeline";
import { Vision } from "../models/Vision";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    updatedAt?: Date | null;
    image?: string | null;
    accounts?: Account[];
    sessions?: Session[];
    premises?: Premise[];
    threads?: Thread[];
    visions?: Vision[];
    timelines?: Timeline[];
    ReactionOnThreads?: ReactionOnThreads[];
    ReactionOnTimelines?: ReactionOnTimelines[];
    ReactionOnVisions?: ReactionOnVisions[];
    _count?: UserCount | null;
}
