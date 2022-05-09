import {MainPage} from "src/components/MainPage";
import {GetServerSideProps} from "next";
import {visionsOverviewQuery} from "../src/gql/query/visionsOverviewQuery";
import {getSsrApollo} from "../src/lib/apollo";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    console.info("start======>");

    const apollo = getSsrApollo(context.req);
    console.time("mainpage getServerSideProps");

    const {data} = await apollo.query({
                                          query: visionsOverviewQuery, variables: {
            limit: 10,
            where: {
                "nextVisions": {
                    "every": {
                        "draftMode": {
                            "equals": true
                        }
                    }
                },
                draftMode: {
                    equals: false
                },
            }
        }
                                      });

    console.timeEnd("mainpage getServerSideProps");
    return {
        props: {
            visions: data.visions
        }, // will be passed to the page component as props
    };
};

export default MainPage;

