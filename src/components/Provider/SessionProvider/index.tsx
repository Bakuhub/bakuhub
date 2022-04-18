import React, {PropsWithChildren} from "react";
import {SessionContextValue} from "next-auth/react";
import {useRouter} from "next/router";

export interface DataFetcherProviderProps {
    data: SessionContextValue;
}

export const SessionProvider: React.FunctionComponent<PropsWithChildren<DataFetcherProviderProps>> =
        ({data, children}) => {
            const router = useRouter();
            return <></>;
        };