import {Vision} from "../../prisma/generated/type-graphql";
import {get} from "lodash";

export const getThumbnail = (vision?: Vision) => {
    const thumbnail = get(vision, "thumbnail");
    switch (true) {
        case  !!thumbnail :
            return thumbnail as string;
        default:
            return "/images/default/thumbnail.jpg";
    }
};