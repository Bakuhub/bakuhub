import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateOrConnectWithoutVisionInput} from "./PremiseCreateOrConnectWithoutVisionInput";
import {PremiseCreateWithoutVisionInput} from "./PremiseCreateWithoutVisionInput";
import {PremiseUpdateWithoutVisionInput} from "./PremiseUpdateWithoutVisionInput";
import {PremiseUpsertWithoutVisionInput} from "./PremiseUpsertWithoutVisionInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutVisionInput", {
    isAbstract: true
})
export class PremiseUpdateOneRequiredWithoutVisionInput {
    @TypeGraphQL.Field(_type => PremiseCreateWithoutVisionInput, {
        nullable: true
    })
    create?: PremiseCreateWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutVisionInput, {
        nullable: true
    })
    connectOrCreate?: PremiseCreateOrConnectWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpsertWithoutVisionInput, {
        nullable: true
    })
    upsert?: PremiseUpsertWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
        nullable: true
    })
    connect?: PremiseWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpdateWithoutVisionInput, {
        nullable: true
    })
    update?: PremiseUpdateWithoutVisionInput | undefined;
}
