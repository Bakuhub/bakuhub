import {signIn, signOut, useSession} from "next-auth/react";
import {Button, CircularProgress} from "@mui/material";
import React from "react";
import {UserAvatar} from "../Avatar";
import {get} from "lodash";

export const AuthButton = () => {
    const session = useSession();
    console.info("ffffffffffffffffffffffffffffffffffffffffffffff");
    console.info(session);
    switch (true) {
        case session.status==="loading":
            return <CircularProgress/>;
        case session.status==="authenticated":
            return <>                    <UserAvatar {...get(session, "data.user", {})}/>
                <Button variant={"outlined"} onClick={() => signOut()}>
                    Logout
                </Button></>;
        case session.status==="unauthenticated":

        default:
            return <Button variant={"outlined"} onClick={() => signIn()}>
                Login
            </Button>;
    }
};