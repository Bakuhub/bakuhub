import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnTimelineScalarWhereInput} from "./ThreadsOnTimelineScalarWhereInput";
import {ThreadsOnTimelineUpdateManyMutationInput} from "./ThreadsOnTimelineUpdateManyMutationInput";

@TypeGraphQL.InputType("ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput", {
    isAbstract: true
})
export class ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput {
    @TypeGraphQL.Field(_type => ThreadsOnTimelineScalarWhereInput, {
        nullable: false
    })
    where!: ThreadsOnTimelineScalarWhereInput;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyMutationInput, {
        nullable: false
    })
    data!: ThreadsOnTimelineUpdateManyMutationInput;
}
