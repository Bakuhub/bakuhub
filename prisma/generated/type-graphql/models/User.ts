import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../scalars";
import {Account} from "./Account";
import {Premise} from "./Premise";
import {Session} from "./Session";
import {Thread} from "./Thread";
import {Timeline} from "./Timeline";
import {Vision} from "./Vision";
import {UserCount} from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
    isAbstract: true
})
export class User {
    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    id!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    name?: string | null;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    email?: string | null;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    emailVerified?: Date | null;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    image?: string | null;

    accounts?: Account[];

    sessions?: Session[];

    premise?: Premise[];

    thread?: Thread[];

    vision?: Vision[];

    timeline?: Timeline[];

    @TypeGraphQL.Field(_type => UserCount, {
        nullable: true
    })
    _count?: UserCount | null;
}
