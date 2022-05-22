export enum ConnectType {
    PREMISE = "PREMISE",
    TIMELINE = "TIMELINE",
    VISION = "VISION",
    MERGE_REQUEST = "MERGE_REQUEST",
    THREAD = "THREAD"
}

export interface LabelType {
    name: string;
    color: string;
    description?: string;
}

export interface ConnectConfig {
    type: ConnectType;
    id: string | null | undefined;
}