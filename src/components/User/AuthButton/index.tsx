import {signIn, signOut, useSession} from "next-auth/react";
import {Button, CircularProgress} from "@mui/material";
import React from "react";
import {UserAvatar} from "../Avatar";
import get from "lodash/get";
import styled from "@emotion/styled";
import {UserNotification} from "../Notification";

export const AuthButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const AuthButton = () => {
    const session = useSession();
    switch (true) {
        case session.status === "loading":
            return <CircularProgress/>;
        case session.status === "authenticated":
            return <AuthButtonContainer>
                <UserNotification/>
                <UserAvatar {...get(session, "data.user", {})}/>
                <Button size={"small"} variant={"contained"} onClick={() => signOut()}>
                    Logout
                </Button>
            </AuthButtonContainer>;
        case session.status === "unauthenticated":

        default:
            return <Button variant={"outlined"} onClick={() => signIn()}>
                Login
            </Button>;
    }
};