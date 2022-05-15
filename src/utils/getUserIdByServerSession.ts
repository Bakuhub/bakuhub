import {Session} from "next-auth";
import get from "lodash/get";

export const getUserIdByServerSession = (session: Session | null): string => String(get(
        session,
        "userId",
        ""
));