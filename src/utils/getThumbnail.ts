import {Vision} from "../../prisma/generated/type-graphql";
import {get} from "lodash";

export const getThumbnail = (vision?: Vision) => {
    const thumbnail = get(vision, "thumbnail", "");
    const snapshot = get(vision, "reference", "");
    switch (true) {
        case  thumbnail!=="":
            return thumbnail as string;
        case snapshot!=="":
            return snapshot as string;
        default:
            return "/images/default/thumbnail.jpg";
    }
};