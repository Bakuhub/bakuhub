import { Premise } from "../../../models/Premise";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { Timeline } from "../../../models/Timeline";
export declare class PremisesOnTimelinesRelationsResolver {
    timeline(premisesOnTimelines: PremisesOnTimelines, ctx: any): Promise<Timeline>;
    premise(premisesOnTimelines: PremisesOnTimelines, ctx: any): Promise<Premise>;
}
