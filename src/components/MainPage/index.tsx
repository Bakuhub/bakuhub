import dynamic from "next/dynamic";
import {Vision} from "../../../prisma/generated/type-graphql";

const VisionLists = dynamic(() => import("src/components/Vision/VisionLists"));

export const MainPage = ({visions}: { visions: Vision[] }) => {
    return <VisionLists visions={visions}/>;
};