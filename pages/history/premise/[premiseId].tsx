import {History} from "../../../src/components/History";
import {getVisionHistoryQueryVariable, visionHistoryQuery} from "../../../src/gql/query/visionHistoryQuery";
import * as React from "react";
import {ssrApolloClient} from "../../../src/lib/apollo";

export async function getServerSideProps<GetServerSideProps>(context: { query: { premiseId: any; }; }) {
    const {premiseId} = context.query;
    const {data} = await ssrApolloClient.query(
            {
                query: visionHistoryQuery,
                ...getVisionHistoryQueryVariable(premiseId as string)
            },);

    return {
        props: {...data}, // will be passed to the page component as props
    };
}


export default History;