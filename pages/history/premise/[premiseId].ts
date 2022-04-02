import {History} from "../../../src/components/History";

export async function getServerSideProps<GetServerSideProps>(context: { query: { id: any; }; }) {
    return {
        props: {}, // will be passed to the page component as props
    };
}


export default History;