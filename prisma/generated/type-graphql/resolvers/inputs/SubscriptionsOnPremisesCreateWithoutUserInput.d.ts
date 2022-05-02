import { PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput";
export declare class SubscriptionsOnPremisesCreateWithoutUserInput {
    premise: PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput;
    lastReadAt?: Date | undefined;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
