import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../scalars";
import {PremisesOnTimelines} from "./PremisesOnTimelines";
import {TagsOnPremises} from "./TagsOnPremises";
import {ThreadsOnPremise} from "./ThreadsOnPremise";
import {User} from "./User";
import {Vision} from "./Vision";
import {PremiseStatus} from "../enums/PremiseStatus";
import {PremiseCount} from "../resolvers/outputs/PremiseCount";

@TypeGraphQL.ObjectType("Premise", {
    isAbstract: true
})
export class Premise {
    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    id!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    title!: string;

    @TypeGraphQL.Field(_type => Date, {
        nullable: false
    })
    createdAt!: Date;

    @TypeGraphQL.Field(_type => Date, {
        nullable: false
    })
    updatedAt!: Date;

    @TypeGraphQL.Field(_type => PremiseStatus, {
        nullable: false
    })
    status!: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION";

    author?: User | null;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    authorId?: string | null;

    vision?: Vision[];

    premisesOnTimelines?: PremisesOnTimelines[];

    tagsOnPremises?: TagsOnPremises[];

    threadsOnPremise?: ThreadsOnPremise[];

    @TypeGraphQL.Field(_type => PremiseCount, {
        nullable: true
    })
    _count?: PremiseCount | null;
}
