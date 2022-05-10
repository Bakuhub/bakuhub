import {PremiseDetail} from "../../../src/components/Premise/PremiseDetail";
import {GetServerSideProps} from "next";
import {getPremiseDetailQueryVariable} from "../../../src/gql/utils/getPremiseDetailQueryVariable";
import {getSsrApollo} from "../../../src/lib/apollo";
import {visionCreatorQuery} from "../../../src/gql/query/visionCreatorQuery";

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