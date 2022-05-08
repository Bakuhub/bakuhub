import {CreatePremise} from "src/components/Premise/PremiseCreator";
import {getSsrApollo} from "src/lib/apollo";
import {GetServerSideProps} from "next";
import {premiseQuery} from "src/gql/query/premiseQuery";
import {getPremiseDetailQueryVariable} from "src/gql/utils/getPremiseDetailQueryVariable";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const apollo = getSsrApollo(context.req);
    console.time("getPremiseDetail");
    const {data: {premise}} = await apollo.query({
                                                     query: premiseQuery,
                                                     ...getPremiseDetailQueryVariable(context.query.id as string)
                                                 });
    console.timeEnd("getPremiseDetail");
    return {
        props: {
            premise
        }, // will be passed to the page component as props
    };
};


export default CreatePremise;