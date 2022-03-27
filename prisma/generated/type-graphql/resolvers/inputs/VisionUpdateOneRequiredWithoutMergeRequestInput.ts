import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateOrConnectWithoutMergeRequestInput} from "./VisionCreateOrConnectWithoutMergeRequestInput";
import {VisionCreateWithoutMergeRequestInput} from "./VisionCreateWithoutMergeRequestInput";
import {VisionUpdateWithoutMergeRequestInput} from "./VisionUpdateWithoutMergeRequestInput";
import {VisionUpsertWithoutMergeRequestInput} from "./VisionUpsertWithoutMergeRequestInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutMergeRequestInput", {
    isAbstract: true
})
export class VisionUpdateOneRequiredWithoutMergeRequestInput {
    @TypeGraphQL.Field(_type => VisionCreateWithoutMergeRequestInput, {
        nullable: true
    })
    create?: VisionCreateWithoutMergeRequestInput | undefined;

    @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutMergeRequestInput, {
        nullable: true
    })
    connectOrCreate?: VisionCreateOrConnectWithoutMergeRequestInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpsertWithoutMergeRequestInput, {
        nullable: true
    })
    upsert?: VisionUpsertWithoutMergeRequestInput | undefined;

    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: true
    })
    connect?: VisionWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpdateWithoutMergeRequestInput, {
        nullable: true
    })
    update?: VisionUpdateWithoutMergeRequestInput | undefined;
}
