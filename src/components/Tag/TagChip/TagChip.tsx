import {Tag as TagType} from "../../../../prisma/generated/type-graphql";
import {FunctionComponent} from "react";
import {useRouter} from "next/router";
import {Chip} from "@mui/material";

interface TagChipProps {
    tag: TagType;
}

export const TagChip: FunctionComponent<TagChipProps> = ({tag,}) => {
    const router = useRouter();
    return <Chip
            clickable
            color={"primary"}
            variant={"filled"}
            label={tag.label}
            onClick={() => {
                router.push(`/tags/${tag.label}`);
            }}
    />;
};