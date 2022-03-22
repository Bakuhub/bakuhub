import {TextField} from "@mui/material";
import React from "react";
import {get} from "lodash";
import {fetchApi} from "../../services/fetchApi";
import Image from "next/image";

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

    const handleSubmit = (e: any) => {
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
    return <><TextField label={"preview image"} fullWidth
                        onChange={handleSubmit}
                        type={"file"}
    />{attachment &&
    <Image src={attachment} alt="Picture of the author"
           height={200}
           width={200}
    />
    }</>;
};