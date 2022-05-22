import {PremiseDetail} from "@components/Premise/PremiseDetail";
import {GetServerSideProps} from "next";
import {getPremiseDetailQueryVariable} from "@gql/utils/getPremiseDetailQueryVariable";
import {getSsrApollo} from "src/lib/apollo";
import {visionCreatorQuery} from "@gql/query/visionCreatorQuery";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const premiseId = context.query.id;
    const apollo = getSsrApollo(context.req);
    console.time("apollo getPremiseDetailQueryVariable");
    const {data} = await apollo.query({
                                          query: visionCreatorQuery,
                                          ...getPremiseDetailQueryVariable(premiseId as string)

                                      });
    console.timeEnd("apollo getPremiseDetailQueryVariable");

    return {
        props: {
            premise: data.premise
        }
    };
};

export default PremiseDetail;