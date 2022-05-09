import {PremiseDetail} from "src/components/Premise/PremiseDetail";
import {GetServerSideProps} from "next";
import {getSsrApollo} from "src/lib/apollo";
import {visionCreatorQuery} from "src/gql/query/visionCreatorQuery";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const visionId = context.query.visionId;
    const apollo = getSsrApollo(context.req);
    console.time("apollo visionCreatorQuery");
    const {data} = await apollo.query({
                                          query: visionCreatorQuery,
                                          variables: {
                                              where: {
                                                  id: visionId
                                              }
                                          }
                                      });
    console.timeEnd("apollo visionCreatorQuery");
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
            activeVision: data.vision
        }
    };
};

export default PremiseDetail;