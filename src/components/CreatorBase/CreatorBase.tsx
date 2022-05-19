import {BottomNavigation, BottomNavigationAction, Button, Grid, Icon, TextField, Typography} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {useRouter} from "next/router";
import get from "lodash/get";
import {useSession} from "next-auth/react";
import {FileInput} from "src/components/FileInput";
import {Snapshot} from "prisma/generated/type-graphql";
import {useSnackbar} from "notistack";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from "moment";
import dynamic from "next/dynamic";
import {getUserIdBySession} from "src/utils/getUserIdBySession";
import {FetchResult} from "@apollo/client";
import {getCreatorMutationVariables} from "./utils/getCreatorMutationVariables";
import {ConnectType} from "../../types";
import {MaterialUIIcons} from "../../constants/MaterialUIIcons";

const TagSearchBar = dynamic(() => import("src/components/Tag/TagSearchBar"));
const LocalizationProvider = dynamic(() => import("@mui/lab/LocalizationProvider"));
const SnapshotCreator = dynamic(() => import("src/components/Snapshot"));
const MergeRequest = dynamic(() => import("src/components/MergeRequest"));
const PremiseOverview = dynamic(() => import("src/components/Premise/PremiseOverview"));
const LoadingButton = dynamic(() => import("@mui/lab/LoadingButton"));
const DateTimePicker = dynamic(() => import("@mui/lab/DateTimePicker"));

export interface CreatorProps<T> {
    initialValue: {
        activityDate?: Date;
        description: string;
        title: string;
        snapshots: Snapshot[];
        thumbnail: string;
        tagLabels: string[];
    };
    isMergeRequest?: boolean;
    handleSubmit: (data: any, mergeRequestType?: MergeRequestType) => Promise<FetchResult<T>>;
    handleSubmitCallback: (result: FetchResult<T>) => void;
    connectType: ConnectType;
    currentVisionId?: string;
    premiseId?: string;
}

export enum MergeRequestType {
    update = "update",
    create = "create"
}

export const CreatorBase = <T, >({
                                     premiseId, currentVisionId,
                                     connectType,
                                     initialValue, handleSubmit,
                                     handleSubmitCallback, isMergeRequest
                                 }: CreatorProps<T>): JSX.Element => {
    const session = useSession();
    const {enqueueSnackbar} = useSnackbar();
    const user = get(session, "data.user");
    const userId = getUserIdBySession(session);
    const router = useRouter();
    const [mergeRequestType, setMergeRequestType] = useState(MergeRequestType.update);
    const [tagLabels, setTagLabels] = useState<string[]>([]);
    const [description, setDescription] = useState("");
    const [activityDate, setActivityDate] = useState<Date>();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [attachment, setAttachment] = useState("");
    const [mergeRequestTitle, setMergeRequestTitle] = useState("");
    const [mergeRequestDescription, setMergeRequestDescription] = useState("");
    const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
    const setFormByExistingVision = useCallback(() => {
        setTagLabels(initialValue.tagLabels);
        setDescription(initialValue.description);
        setActivityDate(initialValue.activityDate);
        setTitle(initialValue.title);
        setAttachment(initialValue.thumbnail);
        setSnapshots(initialValue.snapshots);
    }, [initialValue]);
    const cleanVisionForm = () => {
        setTagLabels([]);
        setDescription("");
        setTitle("");
        setAttachment("");
        setSnapshots([]);
    };
    useEffect(
            () => {
                switch (mergeRequestType) {
                    case MergeRequestType.create:
                        // save the change to initialChange
                        cleanVisionForm();
                        break;
                    case MergeRequestType.update:
                    default:
                        setFormByExistingVision();
                }
            }, [mergeRequestType]
    );
    useEffect(
            () => {
                // should only trigger once
            }, [setFormByExistingVision]
    );
    const submit = async () => {
        setLoading(true);
        const variable = getCreatorMutationVariables({
                                                         attachment,
                                                         connectType,
                                                         currentVisionId,
                                                         premiseId,
                                                         snapshots,
                                                         description,
                                                         title,
                                                         activityDate: activityDate || new Date(),
                                                         userId,
                                                         tagLabels, mergeRequestTitle, mergeRequestDescription
                                                     });
        try {
            const result = await handleSubmit(variable, mergeRequestType);
            if (result.errors?.length) {
                result.errors?.map(({message}) => enqueueSnackbar(message, {variant: "error"}));
            }
            if (result.data) {
                enqueueSnackbar("premise created", {variant: "success"});
                handleSubmitCallback(result);
            }
        } catch (e) {
            enqueueSnackbar(get(e, "message", ""), {variant: "error"});
            console.error(e);
        }
        setLoading(false);
    };

    return <Grid container spacing={1}>
        {
                isMergeRequest && <MergeRequest
                                   mergeRequestTitle={mergeRequestTitle}
                                   setMergeRequestTitle={setMergeRequestTitle}
                                   mergeRequestDescription={mergeRequestDescription}
                                   setMergeRequestDescription={setMergeRequestDescription}
                               />
        }

        <Grid xs={12} md={6} component={"form"} item
              container spacing={1}>
            <Grid item xs={12}>
                {
                        isMergeRequest &&
                        <>
                            <BottomNavigation
                                showLabels
                                value={mergeRequestType}
                                onChange={(event, newValue) => {
                                    setMergeRequestType(newValue);
                                }}
                            >
                                <BottomNavigationAction
                                    value={MergeRequestType.update}
                                    label="update"
                                    icon={<Icon>{MaterialUIIcons.update}</Icon>}
                                />
                                <BottomNavigationAction
                                    value={MergeRequestType.create}
                                    label="create"
                                    icon={<Icon>{MaterialUIIcons.add_circle_outline}</Icon>}/>
                            </BottomNavigation>
                            <Typography variant={"subtitle2"}>
                                Strongly recommended if you tries to deny this premise
                            </Typography>
                        </>
                }
            </Grid>
            <Grid item xs={12}>
                <TextField
                        required fullWidth
                        onChange={({target: {value}}) => setTitle(value)}
                        value={title}
                        label="Title" variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
                <TagSearchBar tagLabels={tagLabels} setTagLabels={setTagLabels}/>
            </Grid>
            <Grid item xs={12}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <DateTimePicker
                            label="Date&Time picker"
                            onChange={value => {
                                setActivityDate(value as Date);
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
             <PremiseOverview premise={{
                 title,
                 "id": "",
                 "createdAt": new Date(),
                 updatedAt: new Date(),
                 "status": snapshots.length ? "REFERENCE_PROVIDED":"RUMOUR",
                 "author": user,
                 "vision": [
                     {
                         activityDate: activityDate || new Date(),
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

};
