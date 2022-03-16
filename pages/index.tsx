import type {NextPage} from "next";
import {MainPage} from "../src/components/MainPage";
import {gql, useMutation} from "@apollo/client";
import {useEffect} from "react";
import {get} from "lodash";

const getUsersQuery = gql`
    query {
        premise(where: {id: "a14c8688-cd5e-4c03-b64c-e895618eece4"} ) {
            title
            status
            vision (where: {prevVision: null}){
                reference
                author {
                    role
                }
            }
        }
    }
`;
const createNewPremise = gql`
    mutation CreatePremise($data: PremiseCreateInput!) {
        createPremise(data: $data) {
            title
            createdAt
            updatedAt
        }
    }
`;
const Home: NextPage = () => {
    const variable = {
        variables:
                {
                    "data": {
                        "title": "Nazanin Zaghari-Ratcliffe and Anoosheh Ashoori on way home to UK",
                        "vision": {
                            "create": {
                                activityDate: new Date(),
                                "title": "Nazanin Zaghari-Ratcliffe and Anoosheh Ashoori on way home to UK",
                                "description": "British-Iranian nationals Nazanin Zaghari-Ratcliffe and Anoosheh Ashoori are on a plane leaving Iran after being freed, the government has said.",
                                "reference": "https://www.bbc.co.uk/news/uk-60756870",
                                "author": {
                                    "connect": {
                                        "id": "fa104dc1-1292-4f20-a9c9-9399d7517023"
                                    }
                                }

                            }
                        },
                        "author": {
                            "connect": {
                                "id": "fa104dc1-1292-4f20-a9c9-9399d7517023"
                            }
                        }
                        , "status": "REFERENCE_PROVIDED",

                    }
                }
    };
    const [create, {data}] = useMutation(createNewPremise);
    console.info(data);
    useEffect(() => {
        try {
            console.info(Date.now());
            create(variable).then(res => {
                console.info(res);
                console.info(Date.now());
            }).catch(err => {
                console.info("--------------");
                console.info(get(Object.values(err), "[2].result.errors"));
            });

        } catch (e) {
            console.error(e);
        }
    }, []);
    return (
            <MainPage/>
    );
};


export default Home;
