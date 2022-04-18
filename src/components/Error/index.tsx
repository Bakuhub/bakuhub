import {FunctionComponent, PropsWithChildren} from "react";

export const ErrorPage: FunctionComponent<PropsWithChildren<{}>> = ({children}) => {
    return (
            <div>
                <h1>Error</h1>
                {children}
                <p>Sorry, an error has occurred.</p>
            </div>
    );
};

export default ErrorPage;