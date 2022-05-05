import {PremiseDetail} from "../../src/components/Premise/PremiseDetail";
import {GetServerSideProps} from "next";
import {ssrApolloClient} from "../../src/lib/apollo";
import {getPremiseDetailQueryVariable} from "../../src/gql/utils/getPremiseDetailQueryVariable";
import {premiseQuery} from "../../src/gql/query/premiseQuery";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const premiseId = context.query.id;
    const {data} = await ssrApolloClient.query({
                                                   query: premiseQuery,
                                                   ...getPremiseDetailQueryVariable(premiseId as string)

                                               });

    return {
        props: {
            premise: data.premise
        }
    };
};
//
// const Wrapper = ({res}: { res: ApolloQueryResult<Premise> }) => {
//     console.info(res);
//     if (!res || res.loading) return <div>Loading...</div>;
//     if (res.error) return <div>Error</div>;
//     if (res.data) return <PremiseDetail premise={res.data.premise}/>;
// };

export default PremiseDetail;