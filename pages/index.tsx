import {MainPage} from "src/components/MainPage";
import {GetServerSideProps} from "next";
import prisma from "src/lib/prisma";
import {getJson} from "../src/utils/getJson";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    console.info("start======>");
    //  const apollo = getSsrApollo(context.req);
    // console.time("apollo");
    // const result = await apollo.query({
    //                                       query: premisesQuery,
    //                                       variables: {
    //                                           "where": {
    //                                               "OR": [
    //                                                   {
    //                                                       "draftMode": {
    //                                                           "equals": false
    //                                                       },
    //                                                       "AND": [
    //                                                           {
    //                                                               "nextVisions": {
    //                                                                   "every": {
    //                                                                       "draftMode": {
    //                                                                           "equals": true
    //                                                                       }
    //                                                                   }
    //                                                               }
    //                                                           }
    //                                                       ]
    //                                                   }
    //                                               ]
    //                                           }
    //                                       }
    //                                   });
    // console.timeEnd("apollo");
    console.time("prisma");
    const premises = await prisma.premise.findMany({
                                                       include: {
                                                           author: true,
                                                           vision: {
                                                               include: {
                                                                   author: true,
                                                                   nextVisions: true
                                                               }
                                                           },
                                                       }
                                                   });
    console.timeEnd("prisma");
    return {
        props: {
            premises: getJson(premises)
        }, // will be passed to the page component as props
    };
};

export default MainPage;