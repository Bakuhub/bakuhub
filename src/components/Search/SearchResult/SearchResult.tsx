import {FunctionComponent} from "react";
import VisionOverview from "src/components/Vision/VisionOverview";
import {Vision} from "../../../../prisma/generated/type-graphql";

export interface SearchResultProps {
    visions: Vision[];

}

export const SearchResult: FunctionComponent<SearchResultProps> = ({visions}) => {
    if (visions.length === 0) {
        return <div>No results found</div>;
    }
    return <div>
        {visions.map(
                (vision) => <VisionOverview key={vision.id} vision={vision}/>)}
    </div>;
};