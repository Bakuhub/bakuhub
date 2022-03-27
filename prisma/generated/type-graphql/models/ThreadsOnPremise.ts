import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../scalars";
import {Premise} from "./Premise";
import {Thread} from "./Thread";

@TypeGraphQL.ObjectType("ThreadsOnPremise", {
    isAbstract: true
})
export class ThreadsOnPremise {
    thread?: Thread;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    threadId!: string;

    premise?: Premise;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    premiseId!: string;

    @TypeGraphQL.Field(_type => Date, {
        nullable: false
    })
    assignedAt!: Date;
}
