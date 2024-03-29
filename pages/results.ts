import {getSsrApollo} from "src/lib/apollo";
import {GetServerSideProps} from "next";
import get from "lodash/get";
import {getWhereEqualTagVision} from "@gql/variables/getWhereEqualTagVision";
import {getWhereContainKeywordVision} from "@gql/variables/getWhereContainKeywordVision";
import {getWhereActiveVision} from "@gql/variables/getWhereActiveVision";
import SearchResult from "src/components/Search/SearchResult";
import {visionsOverviewQuery} from "@gql/query/visionsOverviewQuery";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const params = context.query;
    const getVariables = () => {
        const keyword = Buffer.from(get(params, "keyword", "") as string, "base64").toString();
        const tag = Buffer.from(get(params, "tag", "") as string, "base64").toString();
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