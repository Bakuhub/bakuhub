import {premiseQuery} from "../../../src/gql/query/premiseQuery";
import {getSsrApollo} from "../../../src/lib/apollo";
import {PremiseDetail} from "../../../src/components/Premise/PremiseDetail";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const apollo = getSsrApollo(context.req);
    const {data: {premise}} = await apollo.query({
                                                     query: premiseQuery, variables: {
            "where": {
                "id": context.query.id
            },
            "visionWhere2": {
                "prevVisionId": {
                    "equals": null
                }
            }
        }
                                                 },);
    return {
        props: {
            premise
        }, // will be passed to the page component as props
    };
};


export default PremiseDetail;