import { ThreadOrderByWithRelationInput } from "../../../inputs/ThreadOrderByWithRelationInput";
import { ThreadWhereInput } from "../../../inputs/ThreadWhereInput";
import { ThreadWhereUniqueInput } from "../../../inputs/ThreadWhereUniqueInput";
export declare class FindFirstThreadArgs {
    where?: ThreadWhereInput | undefined;
    orderBy?: ThreadOrderByWithRelationInput[] | undefined;
    cursor?: ThreadWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "activityDate" | "description" | "createdAt" | "updatedAt" | "reference" | "authorId" | "parentThreadId"> | undefined;
}