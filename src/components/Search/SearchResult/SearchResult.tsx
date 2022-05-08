import {FunctionComponent} from "react";
import {Vision} from "../../../../prisma/generated/type-graphql";
import {VisionLists} from "../../Vision/VisionLists/VisionLists";
import {NoSearchResult} from "./NoSearchResult";

export interface SearchResultProps {
    visions: Vision[];

}

export const SearchResult: FunctionComponent<SearchResultProps> = ({visions}) => {
    if (visions.length === 0) {
        return <NoSearchResult/>;
    }
    return <VisionLists visions={visions}/>;
};