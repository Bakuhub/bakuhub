import apollo from "../../lib/apollo";
import {getPremiseDetailQueryVariable} from "../../gql/utils/getPremiseDetailQueryVariable";
import {premiseQuery} from "../../gql/query/premiseQuery";

export const getPremiseById = async (premiseId: string) => {
    const {data: {premise}} = await apollo.query({
        query: premiseQuery,
        ...getPremiseDetailQueryVariable(premiseId)
    });
    return premise;

};


