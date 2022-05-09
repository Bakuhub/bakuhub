import {FunctionComponent} from "react";
import {useRouter} from "next/router";
import {Chip} from "@mui/material";

interface TagChipProps {
    tagLabel: string;
}

export const TagChip: FunctionComponent<TagChipProps> = ({tagLabel}) => {
    const router = useRouter();
    return <Chip
            clickable
            color={"primary"}
            variant={"filled"}
            label={tagLabel}
            onClick={() => {
                router.push(`/results?tag=${tagLabel}`);
            }}
    />;
};