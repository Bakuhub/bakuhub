import {FunctionComponent} from "react";

export const ErrorPage: FunctionComponent = ({children}) => {
    return (
            <div>
                <h1>Error</h1>
                {children}
                <p>Sorry, an error has occurred.</p>
            </div>
    );
};