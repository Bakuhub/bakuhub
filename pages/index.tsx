import type {NextPage} from "next";
import {MainPage} from "../src/components/MainPage";
import {useQuery} from "@apollo/client";
import {premisesQuery} from "../src/gql/query/premisesQuery";

const Home: NextPage = () => {

    const {loading, error, data} = useQuery(premisesQuery);
    console.info(loading, error, data);
    if (loading) return <div>loading</div>;
    console.info("done");
    console.info(data);
    // useEffect(() => {
    //     try {
    //         console.info(Date.now());
    //         create(variable).then(res => {
    //             console.info(res);
    //             console.info(Date.now());
    //         }).catch(err => {
    //             console.info("--------------");
    //             console.info(get(Object.values(err), "[2].result.errors"));
    //         });
    //
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }, []);
    return (
            <MainPage/>
    );

};


export default Home;
