import {Button} from "@mui/material";
import React, {ChangeEvent} from "react";
import {get} from "lodash";
import {fetchApi} from "../../services/fetchApi";

interface FileInputProps {
    attachment: string;
    setAttachment: (attachment: string) => void;
}

export const FileInput: React.FunctionComponent<FileInputProps> = (
        {
            attachment,
            setAttachment
        }
) => {

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        const isFileValid = get(e, "target.files[0]", "");
        if (isFileValid) {
            const reader = new FileReader();
            reader.onload = async function (e) {
                const arrayBuffer = get(e, "target.result", "");
                const res = await fetchApi("/api/test", {
                    method: "POST",
                    body: arrayBuffer
                });
                setAttachment(res.url);
            };
            reader.readAsBinaryString(get(e, "target.files[0]", ""));
        }
    };
    return <><Button
            variant="contained"
            component="label"
    >
        Upload Preview File
        <input
                onChange={handleSubmit}
                type="file"
                hidden
        />
    </Button>
    </>;
};