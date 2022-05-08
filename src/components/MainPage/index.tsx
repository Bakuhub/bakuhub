import {Premise} from "../../../prisma/generated/type-graphql";
import dynamic from "next/dynamic";

const PremiseLists = dynamic(() => import("src/components/Premise/PremiseLists"));
export const MainPage = ({premises}: { premises: Premise[] }) => {
    return <PremiseLists premises={premises}/>;
};