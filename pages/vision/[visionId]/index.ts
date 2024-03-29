import {getVisionQueryArgs} from "@gql/helper/getVisionQueryArgs";
import {getSsrApollo} from "src/lib/apollo";
import DetailPage from "@components/Detail";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const apollo = getSsrApollo(context.req);
    const visionId = context.params?.visionId;
    const [query, {variables}] = getVisionQueryArgs(visionId as string);
    const {data} = await apollo.query(
            {
                query,
                variables
            }
    );

    return {
        props: {
            vision: data.vision
        },
    };

};


export default DetailPage;