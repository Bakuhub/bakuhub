import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateManyAuthorInputEnvelope} from "./TimelineCreateManyAuthorInputEnvelope";
import {TimelineCreateOrConnectWithoutAuthorInput} from "./TimelineCreateOrConnectWithoutAuthorInput";
import {TimelineCreateWithoutAuthorInput} from "./TimelineCreateWithoutAuthorInput";
import {TimelineWhereUniqueInput} from "./TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateNestedManyWithoutAuthorInput", {
    isAbstract: true
})
export class TimelineCreateNestedManyWithoutAuthorInput {
    @TypeGraphQL.Field(_type => [TimelineCreateWithoutAuthorInput], {
        nullable: true
    })
    create?: TimelineCreateWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [TimelineCreateOrConnectWithoutAuthorInput], {
        nullable: true
    })
    connectOrCreate?: TimelineCreateOrConnectWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => TimelineCreateManyAuthorInputEnvelope, {
        nullable: true
    })
    createMany?: TimelineCreateManyAuthorInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [TimelineWhereUniqueInput], {
        nullable: true
    })
    connect?: TimelineWhereUniqueInput[] | undefined;
}
