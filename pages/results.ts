import {getSsrApollo} from "src/lib/apollo";
import {GetServerSideProps} from "next";
import get from "lodash/get";
import {getWhereEqualTagVision} from "../src/gql/variables/getWhereEqualTagVision";
import {getWhereContainKeywordVision} from "../src/gql/variables/getWhereContainKeywordVision";
import {getWhereActiveVision} from "../src/gql/variables/getWhereActiveVision";
import {visionsQuery} from "../src/gql/query/visionsQuery";
import SearchResult from "src/components/Search/SearchResult";

export const getServerSideProps: GetServerSideProps = async (context) => {

    console.info("getServerSideProps");
    console.info(context.query);
    const params = context.query;
    const getVariables = () => {
        const keyword = get(params, "keyword", "");
        const tags = get(params, "tags");
        return {
            variables: {
                where: {
                    "AND": [
                        {
                            ...getWhereEqualTagVision(tags),
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
                                          query: visionsQuery, ...getVariables()
                                      });
    return {
        props: {
            visions: data.visions
        }
    };
};
export default SearchResult;