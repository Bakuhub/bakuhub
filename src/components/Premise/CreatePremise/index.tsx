import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {ReferenceType} from "../../../constants/ReferenceType";
import {useRouter} from "next/router";
import {fetchApi} from "../../../services/fetchApi";
import {useMutation} from "@apollo/client";
import {createPremiseMutation} from "../../../gql/mutation/createPremiseMutation";
import {get} from "lodash";
import {useSession} from "next-auth/react";

export const CreatePremise = () => {
            const router = useRouter();
            const session = useSession();
            console.info(session.data);
            const [imageUrl, setImageUrl] = useState("");
            const [description, setDescription] = useState("");
            const [activityDate, setActivityDate] = useState(new Date());
            const [referenceUrl, setReferenceUrl] = useState("");
            const [title, setTitle] = useState("");
            const [referenceType, setReferenceType] = useState("");

            const [createNewPremise, {data}] = useMutation(createPremiseMutation);
            useEffect(
                    () => {
                        console.info("-0-0-0-0-");
                        console.info(imageUrl);
                        fetchApi("/api/test");
                    }, [imageUrl]
            );
            const readFile = (e: ChangeEvent<HTMLTextAreaElement>) => {
                return new Promise((res, rej) => {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const url = get(e, "target.result", "");
                        setImageUrl(url);
                        fetchApi("/api/test", {
                            method: "POST",
                            body: {
                                url
                            }
                        });
                    };
                    reader.readAsArrayBuffer(get(e, "target.files[0]", ""));
                });

            };
            const handleUpload = async (e: ChangeEvent<HTMLTextAreaElement>) => {
                // const file = get(e, "target.files[0]", "");
                // const filename = encodeURIComponent(file.name);
                // const res = await axios.get(`/api/test?file=${filename}`);
                // console.info(res);
                // const formData = new FormData();
                //
                // // @ts-ignore
                // Object.entries({...fields, file}).forEach(([key, value]: [key: string, value: string]) => {
                //     formData.append(key, value);
                // });
                //
                // const upload = await axios.put(res.data.url
                //         , formData);
                // console.info(upload);
                // console.info("-----------------");
                // // const res = await fetch(uploadUrl, {
                // //     method: "PUT",
                // //     body: data,
                // //     headers: {
                // //         // file type has to match presigned url type
                // //         "Content-Type": file.type,
                // //     },
                // // });
                // if (upload?.ok) {
                //     console.log("Uploaded successfully!");
                // } else {
                //     console.error("Upload failed.");
                // }
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
            </Grid>;
        }
;