import moment from "moment";

export const fromNow = (date: Date | null | undefined) => {
    if (date) {
        return moment(date).fromNow();
    } else {
        return "Invalid Date";
    }
};