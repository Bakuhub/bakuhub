import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateOrConnectWithoutThreadsOnVisionInput} from "./VisionCreateOrConnectWithoutThreadsOnVisionInput";
import {VisionCreateWithoutThreadsOnVisionInput} from "./VisionCreateWithoutThreadsOnVisionInput";
import {VisionUpdateWithoutThreadsOnVisionInput} from "./VisionUpdateWithoutThreadsOnVisionInput";
import {VisionUpsertWithoutThreadsOnVisionInput} from "./VisionUpsertWithoutThreadsOnVisionInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutThreadsOnVisionInput", {
    isAbstract: true
})
export class VisionUpdateOneRequiredWithoutThreadsOnVisionInput {
    @TypeGraphQL.Field(_type => VisionCreateWithoutThreadsOnVisionInput, {
        nullable: true
    })
    create?: VisionCreateWithoutThreadsOnVisionInput | undefined;

    @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutThreadsOnVisionInput, {
        nullable: true
    })
    connectOrCreate?: VisionCreateOrConnectWithoutThreadsOnVisionInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpsertWithoutThreadsOnVisionInput, {
        nullable: true
    })
    upsert?: VisionUpsertWithoutThreadsOnVisionInput | undefined;

    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: true
    })
    connect?: VisionWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpdateWithoutThreadsOnVisionInput, {
        nullable: true
    })
    update?: VisionUpdateWithoutThreadsOnVisionInput | undefined;
}
