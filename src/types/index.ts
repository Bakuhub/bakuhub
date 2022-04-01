export enum ConnectType {
    PREMISE = "PREMISE",
    TIMELINE = "TIMELINE",
    VISION = "VISION",
    MERGE_REQUEST = "MERGE_REQUEST"
}

export interface ConnectConfig {
    type: ConnectType;
    id: string | null;
}