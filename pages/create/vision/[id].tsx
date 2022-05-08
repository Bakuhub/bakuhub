import {getSsrApollo} from "src/lib/apollo";
import {GetServerSideProps} from "next";
import {visionCreatorQuery} from "../../../src/gql/query/visionCreatorQuery";
import VisionCreator from "../../../src/components/Vision/VisionCreator";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const apollo = getSsrApollo(context.req);
    console.time("get visionCreatorQuery");
    const {data: {vision}} = await apollo.query({
                                                    query: visionCreatorQuery,
                                                    variables: {
                                                        where: {
                                                            id: context.query.id
                                                        }
                                                    }
                                                });
    console.timeEnd("get visionCreatorQuery");
    return {
        props: {
            vision
        }, // will be passed to the page component as props
    };
};


export default VisionCreator;