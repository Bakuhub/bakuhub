import {Button, Grid, TextField, Typography} from "@mui/material";
import {FunctionComponent, useState} from "react";
import {useRouter} from "next/router";
import {useMutation} from "@apollo/client";
import {createPremiseMutation} from "../../../gql/mutation/createPremiseMutation";
import get from "lodash/get";
import {useSession} from "next-auth/react";
import {FileInput} from "../../FileInput";
import {Premise, Snapshot} from "../../../../prisma/generated/type-graphql";
import {getInitialProps} from "./utils/getInitialProps";
import {createVisionMutation} from "../../../gql/mutation/createVisionMutation";
import {useSnackbar} from "notistack";
import {getAuthorVariableByUserId} from "../../../gql/utils/getAuthorVariableByUserId";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from "moment";
import dynamic from "next/dynamic";

const LocalizationProvider = dynamic(() => import("@mui/lab/LocalizationProvider"));
const SnapshotCreator = dynamic(() => import("../../Snapshot"));
const MergeRequest = dynamic(() => import("../../MergeRequest"));
const PremiseOverview = dynamic(() => import("../PremiseOverview"));
const LoadingButton = dynamic(() => import("@mui/lab/LoadingButton"));
const DateTimePicker = dynamic(() => import("@mui/lab/DateTimePicker"));

export interface CreatePremiseProps {
    premise: Premise;
}

export const CreatePremise: FunctionComponent<CreatePremiseProps> = ({premise}) => {
            const session = useSession();
            const {enqueueSnackbar} = useSnackbar();
            const user = get(session, "data.user");
            const userId = get(session, "data.userId");
            const router = useRouter();
            const [description, setDescription] = useState(() => getInitialProps(premise, "description"));
            const [activityDate, setActivityDate] = useState(() => {
                const date = getInitialProps(premise, "activityDate");
                return date ? date:null;
            });
            const [loading, setLoading] = useState(false);
            const [title, setTitle] = useState(() => getInitialProps(premise, "title"));
            const [attachment, setAttachment] = useState(() => getInitialProps(premise, "thumbnail"));
            const [createNewPremise, {data}] = useMutation(createPremiseMutation);
            const [createNewVision,] = useMutation(createVisionMutation);
            const [mergeRequestTitle, setMergeRequestTitle] = useState("");
            const [mergeRequestDescription, setMergeRequestDescription] = useState("");
            const [snapshots, setSnapshots] = useState<Snapshot[]>(() => {
                const snapshots = getInitialProps(premise, "reference.snapshots");
                if (snapshots) {
                    return snapshots;
                }
                return [];
            });
            const submit = async () => {
                setLoading(true);
                if (!premise) {
                    const variable = {
                        variables: {
                            data: {
                                ...getAuthorVariableByUserId(session.data?.userId),
                                title,
                                status: "REFERENCE_PROVIDED",
                                tagsOnPremises: {
                                    create: [
                                        {
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
                                    create: [
                                        {
                                            title,
                                            description,
                                            activityDate,
                                            "reference": {
                                                "create": {
                                                    "snapshots": {
                                                        connect: snapshots.map(({id}) => (
                                                                {
                                                                    id
                                                                }
                                                        ))
                                                    }
                                                }
                                            },
                                            ...getAuthorVariableByUserId(session.data?.userId),

                                        }
                                    ]
                                }
                            }
                        }
                    };
                    try {

                        const result = await createNewPremise(variable);
                        if (result.errors?.length) {
                            result.errors?.map(({message}) => enqueueSnackbar(message, {variant: "error"}));
                        }
                        if (result.data) {
                            enqueueSnackbar("premise created", {variant: "success"});
                            await router.push(`/premise/${result.data.createPremise.id}`);
                        }
                    } catch (e) {
                        enqueueSnackbar(get(e, "message", ""), {variant: "error"});
                        console.error(e);
                    }
                    setLoading(false);
                } else {
                    setLoading(true);
                    const variables = {
                        variables: {
                            "data": {
                                title,
                                activityDate,
                                description,
                                "reference": {
                                    "create": {
                                        "snapshots": {
                                            connect: snapshots.map(({id}) => (
                                                    {
                                                        id
                                                    }
                                            ))
                                        }
                                    }
                                }, "thumbnail": attachment,
                                "draftMode": true,
                                "mergeRequest": {
                                    "create": {
                                        "title": mergeRequestTitle,
                                        "description": mergeRequestDescription
                                    }
                                },
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
                            }
                        }
                    };
                    const result = await createNewVision(variables);
                    if (result.errors?.length) {
                        result.errors?.map(({message}) => enqueueSnackbar(message, {variant: "error"}));
                    }
                    if (result.data) {
                        enqueueSnackbar("merge request created", {variant: "success"});
                        await router.push(`/premise/${premise.id}`);
                    }
                    setLoading(false);

                }
            };

            return <Grid container spacing={1}>
                {
                        premise && <MergeRequest
                                    mergeRequestTitle={mergeRequestTitle}
                                    setMergeRequestTitle={setMergeRequestTitle}
                                    mergeRequestDescription={mergeRequestDescription}
                                    setMergeRequestDescription={setMergeRequestDescription}
                                />
                }
                <Grid xs={12} md={6} component={"form"} item
                      container spacing={1}>
                    <Grid item xs={12}><TextField required fullWidth
                                                  onChange={({target: {value}}) => setTitle(value)}
                                                  value={title}
                                                  label="Title" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                    <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={DateAdapter}>
                            <DateTimePicker
                                    label="Date&Time picker"
                                    onChange={value => {

                                        setActivityDate(value);
                                    }}
                                    value={moment(activityDate ? activityDate:Date.now())}
                                    renderInput={(params) => <TextField fullWidth
                                                                        required
                                                                        {...params}

                                                                        helperText={"please enter the date it happened"}

                                    />}
                            />
                        </LocalizationProvider>
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
                        <SnapshotCreator initialSnapshots={snapshots} updateSnapshotsCallback={setSnapshots}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FileInput attachment={attachment} setAttachment={setAttachment}/>
                    </Grid>
                    <Grid item container xs={6}>
                        <LoadingButton loading={loading} fullWidth type={"submit"}
                                       onClick={submit}
                                       variant={"contained"}>
                            Create
                        </LoadingButton>
                    </Grid>
                    <Grid item container xs={6}>
                        <Button fullWidth variant={"outlined"} onClick={() => {
                            router.back();
                        }}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
                <Grid xs={12} md={6} container justifyContent={"center"} item>
                    <Typography variant={"h5"}>
                        Preview:
                    </Typography>
                    {user !== "" &&
                     <PremiseOverview
                         premise={{
                             title,
                             "id": "",
                             "createdAt": new Date(),
                             updatedAt: new Date(),
                             "status": snapshots.length ? "REFERENCE_PROVIDED":"RUMOUR",
                             "author": user,
                             "vision": [
                                 {
                                     activityDate: activityDate ? activityDate:Date.now(),
                                     description,
                                     title,
                                     draftMode: false,
                                     "createdAt": new Date(),
                                     reference: {id: "", snapshots},
                                     "authorId": userId,
                                     "nextVisions": [],
                                     "author": user,
                                     id: "",
                                     "updatedAt": new Date(),
                                     premiseId: "",
                                     thumbnail: attachment
                                 }
                             ]
                         }}/>}
                </Grid>
            </Grid>;

        }
;
