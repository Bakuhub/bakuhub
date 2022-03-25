import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {FormEvent, FunctionComponent, useState} from "react";
import {ReferenceType} from "../../../constants/ReferenceType";
import {useRouter} from "next/router";
import {fetchApi} from "../../../services/fetchApi";
import {useMutation} from "@apollo/client";
import {createPremiseMutation} from "../../../gql/mutation/createPremiseMutation";
import {get} from "lodash";
import {useSession} from "next-auth/react";
import {FileInput} from "../../FileInput";
import PremiseOverview from "../PremiseOverview";
import {Premise} from "../../../../prisma/generated/type-graphql";
import {getInitialProps} from "./utils/getInitialProps";
import {createVisionMutation} from "../../../gql/mutation/createVisionMutation";

export interface CreatePremiseProps {
    premise: Premise;
}

export const CreatePremise: FunctionComponent<CreatePremiseProps> = ({premise}) => {
    console.info("premise");
    console.info(premise);
    const session = useSession();
    const user = get(session, "data.user");
    const userId = get(session, "data.userId");
    const router = useRouter();
    const [description, setDescription] = useState(() => getInitialProps(premise, "description"));
    const [activityDate, setActivityDate] = useState(() => getInitialProps(premise, "activityDate"));
    const [referenceUrl, setReferenceUrl] = useState(() => getInitialProps(premise, "reference"));
    const [title, setTitle] = useState(() => getInitialProps(premise, "title"));
    const [referenceType, setReferenceType] = useState("");
    const [attachment, setAttachment] = useState(() => getInitialProps(premise, "thumbnail"));
    const [createNewPremise, {data}] = useMutation(createPremiseMutation);
    const [createNewVision,] = useMutation(createVisionMutation);

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!premise) {
            const {snapshot} = await fetchApi("/api/create/premise", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    referenceUrl, referenceType, title,
                })
            });
            console.info(snapshot.url);
            const variable = {
                variables: {
                    data: {
                        "author": {
                            "connect": {
                                "id": get(session, "data.userId", "")
                            }
                        },
                        title,
                        status: "REFERENCE_PROVIDED",
                        tagsOnPremises: {
                            create: [{
                                tag: {
                                    connectOrCreate: {
                                        create: {
                                            label: "ukraine",
                                        },
                                        where: {
                                            label: "ukraine",
                                        },
                                    },
                                }
                            }
                            ]
                        },
                        vision: {
                            create: [{
                                title,
                                description,
                                activityDate,
                                reference: snapshot.url || "",
                                "author": {
                                    "connect": {
                                        "id": get(session, "data.userId", "")
                                    }
                                },

                            }]
                        }
                    }
                }
            };
            const result = await createNewPremise(variable);
        } else {
            const variables = {
                variables: {
                    "data": {
                        title,
                        activityDate,
                        description,
                        "reference": referenceUrl,
                        "thumbnail": attachment,
                        "draftMode": true,
                        "author": {
                            "connect": {
                                "id": userId
                            }
                        },
                        "premise": {
                            "connect": {
                                "id": premise.id
                            }
                        },
                        "prevVision": {
                            "connect": {
                                "id": getInitialProps(premise, "id")
                            }
                        },
                        "threadsOnVision": {
                            "create": [
                                {
                                    "thread": {
                                        "create": {
                                            "title": "this is the reason",
                                            "description": "more detail"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            };
            const result = await createNewVision(variables);
        }
    };
    return <Grid container spacing={1}>
        <Grid xs={12} md={6} component={"form"} item onSubmit={submit} container spacing={1}>
            <Grid item xs={12}>
                <TextField required fullWidth
                           onChange={({target: {value}}) => setTitle(value)}
                           value={title}
                           label="Title" variant="outlined"/>
            </Grid>
            <Grid item xs={6}>
                <FormControl required fullWidth>
                    <InputLabel>Reference Type</InputLabel>
                    <Select
                            label={"Reference Type"}
                            variant={"outlined"}
                            value={referenceType}
                            onChange={(e) => {
                                setReferenceType(e.target.value);
                            }}
                    >
                        {
                            Object.values(ReferenceType).map(
                                    value => <MenuItem key={value} value={value}>{value}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField onChange={e => {
                    setActivityDate(new Date(get(e, "target.value", "")));
                }}
                           fullWidth type={"datetime-local"}/>
            </Grid>
            <Grid item xs={12}>
                <TextField
                        multiline
                        fullWidth
                        onChange={({target: {value}}) => setDescription(value)}
                        value={description}
                        maxRows={5}
                        label="Description"
                        variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                        value={referenceUrl || ""}
                        onChange={(e) => setReferenceUrl(e.target.value)}
                        fullWidth
                        label={"reference url"}
                /> </Grid>
            <Grid item xs={12}>
                <FileInput attachment={attachment} setAttachment={setAttachment}/>
            </Grid>
            <Grid item container xs={12}>
                <Button type={"submit"} variant={"contained"}>
                    Create
                </Button>
                <Button variant={"outlined"} onClick={() => {
                    console.info(router);
                    router.back();
                }}>
                    Cancel
                </Button>
            </Grid>

        </Grid>
        <Grid xs={12} md={6} item>
            <Typography>
                Preview:
            </Typography>
            {user!=="" &&
            <PremiseOverview
                premise={{
                    title,
                    "id": "",
                    "createdAt": new Date(),
                    updatedAt: new Date(),
                    "status": referenceUrl ? "REFERENCE_PROVIDED":"RUMOUR",
                    "author": user,
                    "vision": [
                        {
                            activityDate,
                            description,
                            title,
                            draftMode: false,
                            "createdAt": new Date(),
                            reference: referenceUrl,
                            "authorId": userId,
                            "nextVision": [],
                            id: "",
                            premiseId: "",
                            thumbnail: attachment
                        }
                    ]
                }}/>}
        </Grid>
    </Grid>;
};
