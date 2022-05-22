import * as React from "react";
import {FunctionComponent} from "react";
import {Vision} from "prisma/generated/type-graphql";
import {TimelineContainer} from "../../Timeline";
import {MergedVisionListItem} from "@components/History/PremiseVisionsHistory/MergeRequestListItem";

const PremiseVisionsHistory: FunctionComponent<{ visions: Vision[] }> = ({visions}) => {
    return (
            <>
                <TimelineContainer visions={visions}
                                   getDate={(vision) => vision.activityDate?.toISOString() ||
                                                        "no date"}
                                   getDescription={(vision) => vision.description ||
                                                               "no description"}
                                   getTitle={(vision) => vision.title}/>
                {visions.map(vision => <MergedVisionListItem vision={vision} key={vision.id}/>)}

            </>
    );
};

export default PremiseVisionsHistory;