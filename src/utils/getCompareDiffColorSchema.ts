import {Change} from "diff";

export const getCompareDiffColorSchema = (change: Change) => {
    switch (true) {
        case change.added:
            return {
                bgcolor: "#d4edda",
                color: "#155724",
            };
        case change.removed:
            return {
                bgcolor: "#f8d7da",
                color: "#721c24",
            };
        default:
            return {};
    }
};