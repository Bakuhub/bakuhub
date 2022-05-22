import {visionOverviewGqlTemplate} from "./vision";
import {userAvatarGqlTemplate} from "@gql/constants/user";


const gqlTemplate = {
    vision: {
        overview: visionOverviewGqlTemplate,
    },
    user: {
        avatar: userAvatarGqlTemplate
    }
};
export default gqlTemplate;
