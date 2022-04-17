import {signIn, signOut, useSession} from "next-auth/react";
import {Button, CircularProgress} from "@mui/material";
import React from "react";
import {UserAvatar} from "../Avatar";
import get from "lodash/get";
import styled from "@emotion/styled";

export const AuthButtonContainer = styled.div`
  display: flex;
`;
export const AuthButton = () => {
    const session = useSession();
    switch (true) {
        case session.status === "loading":
            return <CircularProgress/>;
        case session.status === "authenticated":
            return <AuthButtonContainer>
                <UserAvatar {...get(session, "data.user", {})}/>
                <Button variant={"outlined"} onClick={() => signOut()}>
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