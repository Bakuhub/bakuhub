import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineScalarWhereInput} from "./TimelineScalarWhereInput";
import {TimelineUpdateManyMutationInput} from "./TimelineUpdateManyMutationInput";

@TypeGraphQL.InputType("TimelineUpdateManyWithWhereWithoutAuthorInput", {
    isAbstract: true
})
export class TimelineUpdateManyWithWhereWithoutAuthorInput {
    @TypeGraphQL.Field(_type => TimelineScalarWhereInput, {
        nullable: false
    })
    where!: TimelineScalarWhereInput;

    @TypeGraphQL.Field(_type => TimelineUpdateManyMutationInput, {
        nullable: false
    })
    data!: TimelineUpdateManyMutationInput;
}
