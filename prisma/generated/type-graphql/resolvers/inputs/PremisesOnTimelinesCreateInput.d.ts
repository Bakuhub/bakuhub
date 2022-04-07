import { PremiseCreateNestedOneWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateNestedOneWithoutPremisesOnTimelinesInput";
import { TimelineCreateNestedOneWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutPremisesOnTimelinesInput";
export declare class PremisesOnTimelinesCreateInput {
    timeline: TimelineCreateNestedOneWithoutPremisesOnTimelinesInput;
    premise: PremiseCreateNestedOneWithoutPremisesOnTimelinesInput;
    assignedAt?: Date | undefined;
}
