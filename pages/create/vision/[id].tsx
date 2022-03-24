import {getPremiseById} from "../../../src/services/getServerSideProps/getPremiseById";
import {CreatePremise} from "../../../src/components/Premise/CreatePremise";

export async function getServerSideProps<GetServerSideProps>(context: { query: { id: any; }; }) {
    const premise = await getPremiseById(context.query.id);
    return {
        props: {
            premise
        }, // will be passed to the page component as props
    };
}


export default CreatePremise;