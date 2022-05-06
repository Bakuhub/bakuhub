import {PrismaClient} from "@prisma/client";
import prisma from "src/lib/prisma";
import {IncomingMessage, ServerResponse} from "http";
import {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "next-auth/react";

export type Context = {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    }
    prisma: PrismaClient
    callbackWaitsForEmptyEventLoop?: boolean
}

export async function createContext({req, res}: {
    req: IncomingMessage | NextApiRequest, res: ServerResponse | NextApiResponse
}): Promise<Context> {
    const session = await getSession({req});

    // if the user is not logged in, omit returning the user and accessToken
    if (!session) return {prisma};
    const {user} = session;

    return {
        user,
        prisma,
    };
}