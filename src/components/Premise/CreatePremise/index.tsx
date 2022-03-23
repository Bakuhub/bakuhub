import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {ReferenceType} from "../../../constants/ReferenceType";
import {useRouter} from "next/router";
import {fetchApi} from "../../../services/fetchApi";
import {useMutation} from "@apollo/client";
import {createPremiseMutation} from "../../../gql/mutation/createPremiseMutation";
import {get} from "lodash";
import {useSession} from "next-auth/react";
import {FileInput} from "../../FileInput";
import PremiseOverview from "../PremiseOverview";

export const CreatePremise = () => {
            const session = useSession();
            console.info(session);
            const user = get(session, "data.user");
            const userId = get(session, "data.userId");
            const router = useRouter();
            const [imageUrl, setImageUrl] = useState("");
            const [description, setDescription] = useState("");
            const [activityDate, setActivityDate] = useState(new Date());
            const [referenceUrl, setReferenceUrl] = useState("");
            const [title, setTitle] = useState("");
            const [referenceType, setReferenceType] = useState("");
            const [attachment, setAttachment] = useState("");
            const [createNewPremise, {data}] = useMutation(createPremiseMutation);
            useEffect(
                    () => {
                        console.info("-0-0-0-0-");
                        console.info(imageUrl);
                    }, [imageUrl]
            );
            const readFile = (e: ChangeEvent<HTMLTextAreaElement>) => {
                return new Promise((res, rej) => {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const url = get(e, "target.result", "");
                        setImageUrl(url);
                    };
                    console.info(get(e, "target.files[0]", ""));
                    reader.readAsDataURL(get(e, "target.files[0]", ""));
                });

            };
            const handleUpload = async (e: ChangeEvent<HTMLTextAreaElement>) => {
                const isFileValid = get(e, "target.files[0]", "");
                if (isFileValid) {
                    const reader = new FileReader();
                    reader.onload = async function (e) {
                        const arrayBuffer = get(e, "target.result", "");
                        const thisShouldBeIt = await fetchApi("/api/test", {
                            method: "POST",
                            body: arrayBuffer
                        });
                        console.info(thisShouldBeIt);
                    };
                    reader.readAsBinaryString(get(e, "target.files[0]", ""));
                }
            };
            const getReferenceInput = () => {
                switch (referenceType) {
                    case ReferenceType.VIDEO:
                    case ReferenceType.IMAGE:
                        return <TextField fullWidth
                                          onChange={handleUpload}
                                          type={"file"}
                        />;
                    default:
                        return <TextField
                                value={referenceUrl || ""}
                                onChange={(e) => setReferenceUrl(e.target.value)}
                                fullWidth
                                label={"reference url"}
                        />;
                }


            };
            const submit = async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
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
                    variables:
                            {
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
                                            }
                                        }]
                                    }
                                }
                            }
                };
                const result = await createNewPremise(variable);
            };
            useEffect(
                    () => {
                        console.log(activityDate);
                    }, [activityDate]
            );
            return <Grid component={"form"} onSubmit={submit} container spacing={1}>
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
                                    console.info(e.target.value);
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
                            // value={activityDate}

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
                    {getReferenceInput()}
                </Grid>
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
                <Grid item>
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
        }
;