import {PremiseDetail} from "../../src/components/Premise/PremiseDetail";
import {getPremiseById} from "../../src/services/getServerSideProps/getPremiseById";

export async function getServerSideProps<GetServerSideProps>(context: { query: { id: any; }; }) {
    const premise = await getPremiseById(context.query.id);
    console.info(premise);
    return {
        props: {
            premise
        }, // will be passed to the page component as props
    };
}


export default PremiseDetail;