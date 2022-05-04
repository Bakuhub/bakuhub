import {getVisionQueryArgs} from "../../src/gql/helper/getVisionQueryArgs";
import apollo from "../../src/lib/apollo";
import DetailPage from "../../src/components/Detail";

export async function getServerSideProps<GetServerSideProps>(context: { query: { id: any; }; }) {

    const [query, variables] = getVisionQueryArgs(context.query.id);
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

}


export default DetailPage;