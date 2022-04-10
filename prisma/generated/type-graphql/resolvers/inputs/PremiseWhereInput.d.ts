import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumPremiseStatusFilter } from "../inputs/EnumPremiseStatusFilter";
import { PremisesOnTimelinesListRelationFilter } from "../inputs/PremisesOnTimelinesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagsOnPremisesListRelationFilter } from "../inputs/TagsOnPremisesListRelationFilter";
import { ThreadsOnPremiseListRelationFilter } from "../inputs/ThreadsOnPremiseListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VisionListRelationFilter } from "../inputs/VisionListRelationFilter";
import { VotesOnPremiseListRelationFilter } from "../inputs/VotesOnPremiseListRelationFilter";
export declare class PremiseWhereInput {
    AND?: PremiseWhereInput[] | undefined;
    OR?: PremiseWhereInput[] | undefined;
    NOT?: PremiseWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeNullableFilter | undefined;
    status?: EnumPremiseStatusFilter | undefined;
    author?: UserRelationFilter | undefined;
    authorId?: StringNullableFilter | undefined;
    vision?: VisionListRelationFilter | undefined;
    premisesOnTimelines?: PremisesOnTimelinesListRelationFilter | undefined;
    tagsOnPremises?: TagsOnPremisesListRelationFilter | undefined;
    threadsOnPremise?: ThreadsOnPremiseListRelationFilter | undefined;
    votesOnPremise?: VotesOnPremiseListRelationFilter | undefined;
}
