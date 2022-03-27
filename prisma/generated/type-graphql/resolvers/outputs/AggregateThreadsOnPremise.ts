import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnPremiseCountAggregate} from "./ThreadsOnPremiseCountAggregate";
import {ThreadsOnPremiseMaxAggregate} from "./ThreadsOnPremiseMaxAggregate";
import {ThreadsOnPremiseMinAggregate} from "./ThreadsOnPremiseMinAggregate";

@TypeGraphQL.ObjectType("AggregateThreadsOnPremise", {
    isAbstract: true
})
export class AggregateThreadsOnPremise {
    @TypeGraphQL.Field(_type => ThreadsOnPremiseCountAggregate, {
        nullable: true
    })
    _count!: ThreadsOnPremiseCountAggregate | null;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseMinAggregate, {
        nullable: true
    })
    _min!: ThreadsOnPremiseMinAggregate | null;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseMaxAggregate, {
        nullable: true
    })
    _max!: ThreadsOnPremiseMaxAggregate | null;
}
