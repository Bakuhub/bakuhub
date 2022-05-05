import {PremiseDetail} from "../../src/components/Premise/PremiseDetail";
import {GetServerSideProps} from "next";
import {getSsrApollo} from "../../src/lib/apollo";
import {premiseQuery} from "../../src/gql/query/premiseQuery";
import {getPremiseDetailQueryVariable} from "../../src/gql/utils/getPremiseDetailQueryVariable";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const premiseId = context.query.id;
    const apollo = getSsrApollo(context.req);
    console.time("apollo");
    const {data} = await apollo.query({
                                          query: premiseQuery,
                                          ...getPremiseDetailQueryVariable(premiseId as string)

                                      });
    console.timeEnd("apollo");
    return {
        props: {
            //premiseId: premiseId as string,
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