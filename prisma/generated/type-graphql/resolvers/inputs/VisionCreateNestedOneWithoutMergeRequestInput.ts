import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateOrConnectWithoutMergeRequestInput} from "./VisionCreateOrConnectWithoutMergeRequestInput";
import {VisionCreateWithoutMergeRequestInput} from "./VisionCreateWithoutMergeRequestInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedOneWithoutMergeRequestInput", {
    isAbstract: true
})
export class VisionCreateNestedOneWithoutMergeRequestInput {
    @TypeGraphQL.Field(_type => VisionCreateWithoutMergeRequestInput, {
        nullable: true
    })
    create?: VisionCreateWithoutMergeRequestInput | undefined;

    @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutMergeRequestInput, {
        nullable: true
    })
    connectOrCreate?: VisionCreateOrConnectWithoutMergeRequestInput | undefined;

    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: true
    })
    connect?: VisionWhereUniqueInput | undefined;
}
