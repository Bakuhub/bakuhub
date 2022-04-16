import {getSearchActiveVisionByKeywordVariable} from "../utils/getSearchActiveVisionByKeywordVariable";
import {versionSearchQuery} from "../query/versionSearchQuery";
import {DocumentNode} from "graphql";

export interface GetVisionsByKeywordArgs {
    keyword: string;
    skip: number;
    take: number;
}

export const getVisionsByKeywordArgs = (props: GetVisionsByKeywordArgs): [DocumentNode, { variables: { where: { AND: ({ draftMode: { equals: boolean }; nextVisions: { every: { draftMode: { equals: boolean } } } } | { OR: ({ title: { contains: string } } | { description: { contains: string } })[] })[] } } }] => {
    return [versionSearchQuery, getSearchActiveVisionByKeywordVariable(props)];
};