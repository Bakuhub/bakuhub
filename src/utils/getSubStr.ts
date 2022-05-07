export const getSubStr = (str: string, maxLength = 100) => {
    if (str && str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    } else {
        return str;
    }
};
