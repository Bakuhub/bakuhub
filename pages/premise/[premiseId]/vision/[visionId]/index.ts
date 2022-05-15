import {PremiseDetail} from "src/components/Premise/PremiseDetail";
import {GetServerSideProps} from "next";
import {getSsrApollo} from "src/lib/apollo";
import {visionCreatorQuery} from "src/gql/query/visionCreatorQuery";
import {createVisionViewsHistoryMutation} from "@gql/mutation/createVisionViewsHistoryMutation";
import {getSession} from "next-auth/react";
import {getUserIdByServerSession} from "../../../../../src/utils/getUserIdByServerSession";
import {getCreateVisionViewsHistoryVariable} from "@gql/utils/getCreateVisionViewsHistoryVariable";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const visionId = context.query.visionId;
    const session = await getSession(context);
    const userId: string = getUserIdByServerSession(session);
    const apollo = getSsrApollo(context.req);
    console.info(session);
    console.info("session=========================");
    console.time("apollo visionCreatorQuery");
    const {data} = await apollo.query({
                                          query: visionCreatorQuery,
                                          variables: {
                                              where: {
                                                  id: visionId
                                              }
                                          }
                                      });
    if (userId) {
        apollo.mutate({
                          mutation: createVisionViewsHistoryMutation,
                          ...getCreateVisionViewsHistoryVariable(visionId as string, userId)
                      }).then(
                () => {
                    console.info("createVisionViewsHistoryMutation");
                }
        );
    }

    console.timeEnd("apollo visionCreatorQuery");
    return {
        props: {
            session,
            activeVision: data.vision
        }
    };
};

export default PremiseDetail;