import {getVisionQueryArgs} from "../../src/gql/helper/getVisionQueryArgs";
import {getSsrApollo} from "../../src/lib/apollo";
import DetailPage from "../../src/components/Detail";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const apollo = getSsrApollo(context.req);
    const [query, variables] = getVisionQueryArgs(context.query.id as string);
    const {data} = await apollo.query(
            {
                query,
                variables
            }
    );

    return {
        props: {
            vision: data.vision
        }, // will be passed to the page component as props
    };

};


export default DetailPage;