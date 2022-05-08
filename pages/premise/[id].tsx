import {PremiseDetail} from "../../src/components/Premise/PremiseDetail";
import {GetServerSideProps} from "next";
import {getPremiseDetailQueryVariable} from "../../src/gql/utils/getPremiseDetailQueryVariable";
import {premiseQuery} from "../../src/gql/query/premiseQuery";
import {getSsrApollo} from "../../src/lib/apollo";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const premiseId = context.query.id;
    const apollo = getSsrApollo(context.req);
    console.time("apollo");
    const {data} = await apollo.query({
                                          query: premiseQuery,
                                          ...getPremiseDetailQueryVariable(premiseId as string)

                                      });
    console.timeEnd("apollo");
    // const premise = await prisma.premise.findFirst({
    //                                                    where: {
    //                                                        id: context.query.id as string
    //                                                    },
    //                                                    include: {
    //                                                        vision: {
    //                                                            include: {
    //                                                                nextVisions: true
    //                                                            }
    //                                                        },
    //                                                    }
    //                                                });

    return {
        props: {
            premise: data.premise
        }
    };
};

export default PremiseDetail;