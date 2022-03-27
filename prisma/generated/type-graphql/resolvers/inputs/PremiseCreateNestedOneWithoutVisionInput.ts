import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateOrConnectWithoutVisionInput} from "./PremiseCreateOrConnectWithoutVisionInput";
import {PremiseCreateWithoutVisionInput} from "./PremiseCreateWithoutVisionInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedOneWithoutVisionInput", {
    isAbstract: true
})
export class PremiseCreateNestedOneWithoutVisionInput {
    @TypeGraphQL.Field(_type => PremiseCreateWithoutVisionInput, {
        nullable: true
    })
    create?: PremiseCreateWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutVisionInput, {
        nullable: true
    })
    connectOrCreate?: PremiseCreateOrConnectWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
        nullable: true
    })
    connect?: PremiseWhereUniqueInput | undefined;
}
