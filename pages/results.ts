import {getSsrApollo} from "src/lib/apollo";
import {GetServerSideProps} from "next";
import get from "lodash/get";
import {getWhereEqualTagVision} from "../src/gql/variables/getWhereEqualTagVision";
import {getWhereContainKeywordVision} from "../src/gql/variables/getWhereContainKeywordVision";
import {getWhereActiveVision} from "../src/gql/variables/getWhereActiveVision";
import SearchResult from "src/components/Search/SearchResult";
import {visionsOverviewQuery} from "../src/gql/query/visionsOverviewQuery";

export const getServerSideProps: GetServerSideProps = async (context) => {

    console.info("getServerSideProps");
    console.info(context.query);
    const params = context.query;
    const getVariables = () => {
        const keyword = get(params, "keyword", "");
        const tag = get(params, "tag");
        return {
            variables: {
                where: {
                    "AND": [
                        {
                            ...getWhereEqualTagVision(tag),
                            ...getWhereContainKeywordVision(keyword.toString()),
                            ...getWhereActiveVision()
                        }
                    ]
                }
            }
        };
    };
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const apollo = getSsrApollo(context.req);
    const {data} = await apollo.query({
                                          query: visionsOverviewQuery, ...getVariables()
                                      });
    return {
        props: {
            visions: data.visions
        }
    };
};
export default SearchResult;