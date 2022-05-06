export declare class SubscriptionsOnTimelinesCreateManyInput {
    userId: string;
    timelineId: string;
    hasUnreadNotifications?: boolean | undefined;
    lastReadAt?: Date | undefined;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
