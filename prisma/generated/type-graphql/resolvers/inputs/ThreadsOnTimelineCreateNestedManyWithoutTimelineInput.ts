import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnTimelineCreateManyTimelineInputEnvelope} from "./ThreadsOnTimelineCreateManyTimelineInputEnvelope";
import {ThreadsOnTimelineCreateOrConnectWithoutTimelineInput} from "./ThreadsOnTimelineCreateOrConnectWithoutTimelineInput";
import {ThreadsOnTimelineCreateWithoutTimelineInput} from "./ThreadsOnTimelineCreateWithoutTimelineInput";
import {ThreadsOnTimelineWhereUniqueInput} from "./ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnTimelineCreateNestedManyWithoutTimelineInput", {
    isAbstract: true
})
export class ThreadsOnTimelineCreateNestedManyWithoutTimelineInput {
    @TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateWithoutTimelineInput], {
        nullable: true
    })
    create?: ThreadsOnTimelineCreateWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateOrConnectWithoutTimelineInput], {
        nullable: true
    })
    connectOrCreate?: ThreadsOnTimelineCreateOrConnectWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateManyTimelineInputEnvelope, {
        nullable: true
    })
    createMany?: ThreadsOnTimelineCreateManyTimelineInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput], {
        nullable: true
    })
    connect?: ThreadsOnTimelineWhereUniqueInput[] | undefined;
}
