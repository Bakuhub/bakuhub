import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {FormEvent, useEffect, useState} from "react";
import {ReferenceType} from "../../../constants/ReferenceType";
import {useRouter} from "next/router";
import {fetchApi} from "../../../services/fetchApi";
import {useMutation} from "@apollo/client";
import {createPremiseMutation} from "../../../gql/mutation/createPremiseMutation";
import {get} from "lodash";

export const CreatePremise = () => {
    const router = useRouter();

    const [activityDate, setActivityDate] = useState(new Date());
    const [referenceUrl, setReferenceUrl] = useState("");
    const [title, setTitle] = useState("");
    const [referenceType, setReferenceType] = useState("");
    const [createNewPremise, {data}] = useMutation(createPremiseMutation);
    const getReferenceInput = () => {
        switch (referenceType) {
            case ReferenceType.VIDEO:
            case ReferenceType.IMAGE:
                return <TextField fullWidth
                                  type={"file"}/>;
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
        const snapshot = await fetchApi("/api/create/premise", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                referenceUrl, referenceType, title,
            })
        });

        const variable = {
            variables:
                    {
                        data: {
                            title,
                            status: "RUMOUR",
                            tagsOnPremises: {
                                create: [{
                                    tag: {
                                        connectOrCreate: {
                                            create: {
                                                label: "computing",
                                            },
                                            where: {
                                                label: "computing",
                                            },
                                        },
                                    }
                                }
                                ]
                            },
                            vision: {
                                create: [{
                                    title,
                                    description: "this is cde",
                                    activityDate,
                                    reference: snapshot.url || "",
                                }]
                            }
                        }
                    }
        };
        const result = await createNewPremise(variable);
        console.info(result);
        console.info("-0fe-w0f=-we0=-f0we=");
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
};