import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";
export declare class VotesOnVisionWhereInput {
    AND?: VotesOnVisionWhereInput[] | undefined;
    OR?: VotesOnVisionWhereInput[] | undefined;
    NOT?: VotesOnVisionWhereInput[] | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    vision?: VisionRelationFilter | undefined;
    visionId?: StringFilter | undefined;
    vote?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
