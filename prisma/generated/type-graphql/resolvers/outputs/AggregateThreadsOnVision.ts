import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnVisionCountAggregate} from "./ThreadsOnVisionCountAggregate";
import {ThreadsOnVisionMaxAggregate} from "./ThreadsOnVisionMaxAggregate";
import {ThreadsOnVisionMinAggregate} from "./ThreadsOnVisionMinAggregate";

@TypeGraphQL.ObjectType("AggregateThreadsOnVision", {
    isAbstract: true
})
export class AggregateThreadsOnVision {
    @TypeGraphQL.Field(_type => ThreadsOnVisionCountAggregate, {
        nullable: true
    })
    _count!: ThreadsOnVisionCountAggregate | null;

    @TypeGraphQL.Field(_type => ThreadsOnVisionMinAggregate, {
        nullable: true
    })
    _min!: ThreadsOnVisionMinAggregate | null;

    @TypeGraphQL.Field(_type => ThreadsOnVisionMaxAggregate, {
        nullable: true
    })
    _max!: ThreadsOnVisionMaxAggregate | null;
}
