import dynamic from "next/dynamic";

const snapshotCreator = dynamic(() => import("../../src/components/Snapshot"), {ssr: false});
export default snapshotCreator;