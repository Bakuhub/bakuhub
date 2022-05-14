import PremiseVisionsHistory from "src/components/History/PremiseVisionsHistory";
import {getVisionHistoryQueryVariable, visionHistoryQuery} from "@gql/query/visionHistoryQuery";
import * as React from "react";
import {getSsrApollo} from "src/lib/apollo";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const {premiseId} = context.query;
    const apollo = getSsrApollo(context.req);
    const {data} = await apollo.query(
            {
                query: visionHistoryQuery,
                ...getVisionHistoryQueryVariable(premiseId as string)
            },);

    return {
        props: {...data}, // will be passed to the page component as props
    };
};


export default PremiseVisionsHistory;