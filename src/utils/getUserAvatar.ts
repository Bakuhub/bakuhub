import {UserAvatarProps} from "../components/User/Avatar";

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + (
                (
                        hash << 5
                ) - hash
        );
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
        const value = (
                              hash >> (
                                      i * 8
                              )
                      ) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
}

function srcAvatar(src: string) {
    return {
        src
    };
}


export const getUserAvatar = (user?: UserAvatarProps) => {
    if (user) {
        switch (true) {
            case typeof user.image === "string":
                return srcAvatar(user.image as string);
            case typeof user.name === "string":
                return stringAvatar(user.name as string);
            case typeof user.email === "string":
                return stringAvatar(user.email as string);
            default:
                return srcAvatar("/images/anonymous.jpg");
        }
    }
    return srcAvatar("/images/anonymous.jpg");
};
