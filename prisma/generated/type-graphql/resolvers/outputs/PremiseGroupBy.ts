import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCountAggregate} from "./PremiseCountAggregate";
import {PremiseMaxAggregate} from "./PremiseMaxAggregate";
import {PremiseMinAggregate} from "./PremiseMinAggregate";
import {PremiseStatus} from "../../enums/PremiseStatus";

@TypeGraphQL.ObjectType("PremiseGroupBy", {
    isAbstract: true
})
export class PremiseGroupBy {
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

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    authorId!: string | null;

    @TypeGraphQL.Field(_type => PremiseCountAggregate, {
        nullable: true
    })
    _count!: PremiseCountAggregate | null;

    @TypeGraphQL.Field(_type => PremiseMinAggregate, {
        nullable: true
    })
    _min!: PremiseMinAggregate | null;

    @TypeGraphQL.Field(_type => PremiseMaxAggregate, {
        nullable: true
    })
    _max!: PremiseMaxAggregate | null;
}
