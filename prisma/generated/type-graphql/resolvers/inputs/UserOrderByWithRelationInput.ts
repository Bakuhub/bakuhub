import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {AccountOrderByRelationAggregateInput} from "./AccountOrderByRelationAggregateInput";
import {PremiseOrderByRelationAggregateInput} from "./PremiseOrderByRelationAggregateInput";
import {SessionOrderByRelationAggregateInput} from "./SessionOrderByRelationAggregateInput";
import {ThreadOrderByRelationAggregateInput} from "./ThreadOrderByRelationAggregateInput";
import {TimelineOrderByRelationAggregateInput} from "./TimelineOrderByRelationAggregateInput";
import {VisionOrderByRelationAggregateInput} from "./VisionOrderByRelationAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
    isAbstract: true
})
export class UserOrderByWithRelationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    id?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    name?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    email?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    emailVerified?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    image?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput, {
        nullable: true
    })
    accounts?: AccountOrderByRelationAggregateInput | undefined;

    @TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput, {
        nullable: true
    })
    sessions?: SessionOrderByRelationAggregateInput | undefined;

    @TypeGraphQL.Field(_type => PremiseOrderByRelationAggregateInput, {
        nullable: true
    })
    premise?: PremiseOrderByRelationAggregateInput | undefined;

    @TypeGraphQL.Field(_type => ThreadOrderByRelationAggregateInput, {
        nullable: true
    })
    thread?: ThreadOrderByRelationAggregateInput | undefined;

    @TypeGraphQL.Field(_type => VisionOrderByRelationAggregateInput, {
        nullable: true
    })
    vision?: VisionOrderByRelationAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TimelineOrderByRelationAggregateInput, {
        nullable: true
    })
    timeline?: TimelineOrderByRelationAggregateInput | undefined;
}
