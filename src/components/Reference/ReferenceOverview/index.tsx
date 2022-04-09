import {Snapshot} from "../../../../prisma/generated/type-graphql";
import {Grid, IconButton, Tooltip, Typography} from "@mui/material";
import {FunctionComponent} from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import {styled} from "@mui/system";

export interface ReferenceOverviewProps {
    snapshots: Snapshot[];
}

const StyledIconButton = styled(IconButton)`
  margin-left: 20px;
`;
export const ReferenceOverview: FunctionComponent<ReferenceOverviewProps> = ({snapshots}) => {
    return <Grid item container>
        {
            snapshots.map(
                    (snapshot, index) => (
                            <Grid alignItems={"center"} container item key={snapshot.id}>
                                <Typography variant={"body2"}>
                                    {snapshot.sourceUrl}
                                </Typography>
                                <Tooltip title={"download snapshot"}>
                                    <StyledIconButton onClick={() => window.open(snapshot.s3Url)}>
                                        <CloudDownloadIcon/>
                                    </StyledIconButton>
                                </Tooltip>
                            </Grid>
                    )
            )
        }
    </Grid>;
};