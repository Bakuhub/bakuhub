import {getSearchActiveVisionByKeywordVariable} from "../utils/getSearchActiveVisionByKeywordVariable";
import {versionSearchQuery} from "../query/versionSearchQuery";
import {DocumentNode} from "graphql";

export const getVisionsByKeywordArgs = (keyword: string): [DocumentNode, { variables: { where: { draftMode: { equals: boolean }; AND: { OR: { description: { contains: string } }[]; title: { contains: string } }[]; nextVisions: { every: { draftMode: { equals: boolean } } } } } }] => {
    return [versionSearchQuery, getSearchActiveVisionByKeywordVariable(keyword)];
};