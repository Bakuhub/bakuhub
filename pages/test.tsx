import type {NextPage} from "next";
import {useSession} from "next-auth/react";
import {getUserIdBySession} from "../src/utils/getUserIdBySession";

const Home: NextPage = () => {
    const session = useSession();
    const userId = getUserIdBySession(session);
    return (
            <div>
                <h1>Hello Next.js</h1>
            </div>
    );
};


export default Home;