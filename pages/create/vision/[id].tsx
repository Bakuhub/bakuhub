import {PremiseCreator} from "src/components/Premise/PremiseCreator";
import {getSsrApollo} from "src/lib/apollo";
import {GetServerSideProps} from "next";
import {getPremiseDetailQueryVariable} from "src/gql/utils/getPremiseDetailQueryVariable";
import {visionCreatorQuery} from "../../../src/gql/query/visionCreatorQuery";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const apollo = getSsrApollo(context.req);
    console.time("getPremiseDetail");
    const {data: {vision}} = await apollo.query({
                                                    query: visionCreatorQuery,
                                                    ...getPremiseDetailQueryVariable(context.query.id as string)
                                                });
    console.timeEnd("getPremiseDetail");
    return {
        props: {
            vision
        }, // will be passed to the page component as props
    };
};


export default PremiseCreator;