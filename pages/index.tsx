import type {NextPage} from "next";
import {MainPage} from "../src/components/MainPage";
import {useSelector} from "react-redux";

const Home: NextPage = () => {
    const number = useSelector(state => state);
    return (
            <MainPage/>
    );
};

export default Home;
