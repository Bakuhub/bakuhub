export declare class SubscriptionsOnPremisesCreateManyInput {
    userId: string;
    premiseId: string;
    hasUnreadNotifications?: boolean | undefined;
    lastReadAt?: Date | undefined;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
