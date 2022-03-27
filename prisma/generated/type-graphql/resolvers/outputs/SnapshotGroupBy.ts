import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {SnapshotCountAggregate} from "./SnapshotCountAggregate";
import {SnapshotMaxAggregate} from "./SnapshotMaxAggregate";
import {SnapshotMinAggregate} from "./SnapshotMinAggregate";

@TypeGraphQL.ObjectType("SnapshotGroupBy", {
    isAbstract: true
})
export class SnapshotGroupBy {
    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    id!: string;

    @TypeGraphQL.Field(_type => Date, {
        nullable: false
    })
    createdAt!: Date;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    versionId!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    url!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    sourceUrl!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    caption!: string;

    @TypeGraphQL.Field(_type => SnapshotCountAggregate, {
        nullable: true
    })
    _count!: SnapshotCountAggregate | null;

    @TypeGraphQL.Field(_type => SnapshotMinAggregate, {
        nullable: true
    })
    _min!: SnapshotMinAggregate | null;

    @TypeGraphQL.Field(_type => SnapshotMaxAggregate, {
        nullable: true
    })
    _max!: SnapshotMaxAggregate | null;
}
