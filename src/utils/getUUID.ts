import {randomBytes} from "crypto";

export const getUUID = () => randomBytes(16).toString("hex");