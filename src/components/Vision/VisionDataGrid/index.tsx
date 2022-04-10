import React, {FunctionComponent} from "react";
import {DataGrid, GridColDef, GridRowsProp, GridToolbar} from "@mui/x-data-grid";
import {Vision} from "../../../../prisma/generated/type-graphql";
import {Chip, LinearProgress} from "@mui/material";

const rows: GridRowsProp = [
    {id: 1, col1: "Hello", col2: "World"},
    {id: 2, col1: "DataGridPro", col2: "is Awesome"},
    {id: 3, col1: "MUI", col2: "is Amazing"},
];


const getColumns = (updatedSelectedStatus: (visionId: string, nextStatus: boolean) => void): GridColDef[] => [
    {
        field: "title", headerName: "title", flex: 1,
    },
    {
        field: "description", headerName: "description", flex: 1,
    },
    {
        field: "updatedAt", headerName: "createdAt", flex: 1,
    },
    {
        field: "activityDate", headerName: "activity Date", flex: 1,
    },
    {
        field: "inTimeline", headerName: "in Timeline", flex: 1,

        renderCell: (params) => {
            console.info(params);
            console.info("---------------------");
            return <Chip
                    label={params.value ? "Remove":"Add"}
                    color={params.value ? "error":"primary"}
                    onClick={() => updatedSelectedStatus(params.row.id, !params.value)}/>;
        }
    },
];

export interface VisionDataGridProps {
    visions: Vision[];
    loading: boolean;
    handleUpdateVisionStatus: (visionId: string, nextStatus: boolean) => void;
}


export const VisionDataGrid: FunctionComponent<VisionDataGridProps> = ({
                                                                           visions, loading,
                                                                           handleUpdateVisionStatus
                                                                       }) => {
    return (
            <div style={{width: "100%"}}>
                <DataGrid
                        onCellClick={(e) => console.log(e)}
                        components={{
                            Toolbar: GridToolbar,
                            LoadingOverlay: LinearProgress,
                        }}
                        onStateChange={(state, event, details) => console.log(state, event, details)}
                        // onRowClick={(params, event, details) => console.log(params, event, details)}
                        loading={loading}
                        rows={visions}
                        columns={getColumns(handleUpdateVisionStatus)}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        autoHeight
                        autoPageSize/>
            </div>
    );
};
export default VisionDataGrid;