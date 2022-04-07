import { PremiseCreateNestedOneWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateNestedOneWithoutThreadsOnPremiseInput";
import { ThreadCreateNestedOneWithoutThreadsOnPremiseInput } from "../inputs/ThreadCreateNestedOneWithoutThreadsOnPremiseInput";
export declare class ThreadsOnPremiseCreateInput {
    thread: ThreadCreateNestedOneWithoutThreadsOnPremiseInput;
    premise: PremiseCreateNestedOneWithoutThreadsOnPremiseInput;
    assignedAt?: Date | undefined;
}
