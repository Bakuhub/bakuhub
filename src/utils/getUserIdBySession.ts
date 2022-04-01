import {get} from "lodash";
import {Session} from "next-auth";

export const getUserIdBySession = (session: { data: null; status: "unauthenticated" | "loading"; } | { data: Session; status: "authenticated"; } | { data: null; status: "loading"; }) => get(session, "data.userId", "");