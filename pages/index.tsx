import type {NextPage} from "next";
import {MainPage} from "../src/components/MainPage";
import {gql, useQuery} from "@apollo/client";

const getUsersQuery = gql`
    query {
        users {
            id
            email
            role
            createdAt
        }
    }
`;
const Home: NextPage = () => {
    const {data, error, loading} = useQuery(getUsersQuery);
    console.info(data);
    console.info(error);
    console.info(loading);
    return (
            <MainPage/>
    );
};

export default Home;
