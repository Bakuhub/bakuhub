import {getSearchActiveVisionByKeywordVariable} from "../utils/getSearchActiveVisionByKeywordVariable";
import {versionSearchQuery} from "../query/versionSearchQuery";
import {DocumentNode} from "graphql";

export const getVisionsByKeywordArgs = (keyword: string): [DocumentNode, { variables: { where: { AND: ({ draftMode: { equals: boolean }; nextVisions: { every: { draftMode: { equals: boolean } } } } | { OR: ({ title: { contains: string } } | { description: { contains: string } })[] })[] } } }] => {
    return [versionSearchQuery, getSearchActiveVisionByKeywordVariable(keyword)];
};