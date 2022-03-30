import {signIn, signOut, useSession} from "next-auth/react";
import {Button} from "@mui/material";

export const UserStatus = () => {
    const {data: session} = useSession();
    if (session) {

        return <Button onClick={() => signOut()}>
            Logout
        </Button>;
    } else {
        return <Button onClick={() => signIn()}>
            Login
        </Button>;
    }
};