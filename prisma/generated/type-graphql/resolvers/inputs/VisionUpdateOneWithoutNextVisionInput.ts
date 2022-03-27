import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateOrConnectWithoutNextVisionInput} from "./VisionCreateOrConnectWithoutNextVisionInput";
import {VisionCreateWithoutNextVisionInput} from "./VisionCreateWithoutNextVisionInput";
import {VisionUpdateWithoutNextVisionInput} from "./VisionUpdateWithoutNextVisionInput";
import {VisionUpsertWithoutNextVisionInput} from "./VisionUpsertWithoutNextVisionInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateOneWithoutNextVisionInput", {
    isAbstract: true
})
export class VisionUpdateOneWithoutNextVisionInput {
    @TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionInput, {
        nullable: true
    })
    create?: VisionCreateWithoutNextVisionInput | undefined;

    @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutNextVisionInput, {
        nullable: true
    })
    connectOrCreate?: VisionCreateOrConnectWithoutNextVisionInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpsertWithoutNextVisionInput, {
        nullable: true
    })
    upsert?: VisionUpsertWithoutNextVisionInput | undefined;

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    disconnect?: boolean | undefined;

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    delete?: boolean | undefined;

    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: true
    })
    connect?: VisionWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpdateWithoutNextVisionInput, {
        nullable: true
    })
    update?: VisionUpdateWithoutNextVisionInput | undefined;
}
