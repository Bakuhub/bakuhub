import {userQuery} from "src/gql/query/userQuery";
import {useQuery} from "@apollo/client";
import {useSession} from "next-auth/react";
import {getUserIdBySession} from "src/utils/getUserIdBySession";
import {getUserQueryVariables} from "../../../gql/utils/getUserQueryVariables";
import {User} from "../../../../prisma/generated/type-graphql";
import {CircularProgress} from "@mui/material";

export const UserProfile = () => {
    const session = useSession();
    const userId = getUserIdBySession(session);
    const {data, loading, error} = useQuery(userQuery, getUserQueryVariables(userId));
    console.log(data, loading, error);
    const user: User = data?.user;
    if (loading) return <CircularProgress/>;
    if (user) {
        return <>
            {data.user.name}
            {
                Object.entries(data.user._count).map(([key, value],) => {
                                                         if (typeof value === "number") {
                                                             return <div key={key}>
                                                                 <div>
                                                                     {key}
                                                                 </div>
                                                                 <div>
                                                                     {String(value)}
                                                                 </div>
                                                             </div>;

                                                         }
                                                     }
                )
            }
        </>;
    }
};