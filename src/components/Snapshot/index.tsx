import {Grid, IconButton, TextField, Tooltip, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {getSnapshot} from "../../services/api/getSnapshot";
import {useMutation} from "@apollo/client";
import {createSnapshotMutation} from "../../gql/mutation/createSnapshotMutation";
import get from "lodash/get";
import {useSnackbar} from "notistack";
import {Snapshot} from "../../../prisma/generated/type-graphql";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import {LoadingButton} from "@mui/lab";
import moment from "moment";

export interface SnapshotCreatorProps {
    caption?: string;
    initialSnapshots?: Snapshot[];
    updateSnapshotsCallback: (snapshots: Snapshot[]) => void;
}

export const SnapshotCreator: React.FunctionComponent<SnapshotCreatorProps> = ({
                                                                                   caption,
                                                                                   initialSnapshots,
                                                                                   updateSnapshotsCallback
                                                                               }) => {
    const {enqueueSnackbar} = useSnackbar();
    const [snapshots, setSnapshots] = useState<Snapshot[]>(initialSnapshots || []);
    const [referenceUrl, setReferenceUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [createSnapshot] = useMutation(createSnapshotMutation);
    const handleClick = async () => {
        setIsLoading(true);
        if (snapshots.length >= 3) {
            enqueueSnackbar("max references are 3, please remove one before add", {
                variant: "error",
            });
            setIsLoading(false);
            return;
        }
        enqueueSnackbar("getting snapshot", {
            variant: "info",
        });
        const res = await getSnapshot({
                                          url: referenceUrl,
                                      });

        if (res && res.url) {
            enqueueSnackbar("saving snapshot", {
                variant: "info",
            });
            const result = await createSnapshot({
                                                    variables: {
                                                        "data": {
                                                            "versionId": res.versionId,
                                                            s3Url: res.url,
                                                            "sourceUrl": referenceUrl,
                                                            "caption": caption || ""
                                                        }
                                                    }
                                                });
            const newSnapshot: Snapshot = get(result, "data.createSnapshot", {});
            if (newSnapshot) {
                setSnapshots([...snapshots, newSnapshot]);
                enqueueSnackbar("snapshot is granted", {
                    variant: "success",
                });
            } else {
                enqueueSnackbar("snapshot can not be saved", {
                    variant: "error",
                });
            }
        } else {
            const errorMsg = get(res, "errorMessage.message", "something went wrong, the snapshot can't be granted"
            );
            enqueueSnackbar(errorMsg, {
                variant: "error",
            });
        }
        setReferenceUrl("");
        setIsLoading(false);
    };
    useEffect(() => {
        if (updateSnapshotsCallback) {
            updateSnapshotsCallback(snapshots);
        }
    }, [snapshots]);
    return <Grid alignContent={"center"} container>
        <Grid item container justifyContent={"space-between"}>
            <Grid item xs={10}>
                <TextField
                        label={"Reference URL"}
                        fullWidth
                        value={referenceUrl}
                        onChange={(e) => setReferenceUrl(e.target.value)}
                />
            </Grid>
            <Grid item container xs={2} justifyContent={"flex-end"}>
                <LoadingButton loading={isLoading} variant={"outlined"} onClick={handleClick}>
                    <Tooltip title={"add reference"}><AddToPhotosIcon/></Tooltip>
                </LoadingButton>
            </Grid>
        </Grid>
        {
            snapshots.map(({versionId, sourceUrl, createdAt, s3Url}: Snapshot) =>
                                  <Grid justifyContent={"space-between"} key={versionId} item container
                                        alignItems={"center"} xs={12}>
                                      <Tooltip key={versionId} title={sourceUrl}>
                                          <Typography variant={"h6"} onClick={() => window.open(sourceUrl)}>
                                              {new URL(sourceUrl).host}...
                                          </Typography>
                                      </Tooltip>
                                      <Grid item>
                                          <Tooltip onClick={() => window.open(s3Url)}
                                                   title={`Snapshot created at ${moment(createdAt).fromNow()}`}>
                                              <IconButton>
                                                  <InsertPhotoIcon/>
                                              </IconButton>
                                          </Tooltip>
                                          <IconButton
                                                  onClick={() => {
                                                      setSnapshots(
                                                              snapshots.filter(snapshot => snapshot.versionId !==
                                                                                           versionId)
                                                      );
                                                  }
                                                  } aria-label="delete">
                                              <DeleteIcon fontSize="inherit"/>
                                          </IconButton>
                                      </Grid>
                                  </Grid>
            )
        }
    </Grid>;
};