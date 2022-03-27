import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateManyPrevVisionInputEnvelope} from "./VisionCreateManyPrevVisionInputEnvelope";
import {VisionCreateOrConnectWithoutPrevVisionInput} from "./VisionCreateOrConnectWithoutPrevVisionInput";
import {VisionCreateWithoutPrevVisionInput} from "./VisionCreateWithoutPrevVisionInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedManyWithoutPrevVisionInput", {
    isAbstract: true
})
export class VisionCreateNestedManyWithoutPrevVisionInput {
    @TypeGraphQL.Field(_type => [VisionCreateWithoutPrevVisionInput], {
        nullable: true
    })
    create?: VisionCreateWithoutPrevVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPrevVisionInput], {
        nullable: true
    })
    connectOrCreate?: VisionCreateOrConnectWithoutPrevVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => VisionCreateManyPrevVisionInputEnvelope, {
        nullable: true
    })
    createMany?: VisionCreateManyPrevVisionInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
        nullable: true
    })
    connect?: VisionWhereUniqueInput[] | undefined;
}
