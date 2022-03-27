import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateManyAuthorInputEnvelope} from "./PremiseCreateManyAuthorInputEnvelope";
import {PremiseCreateOrConnectWithoutAuthorInput} from "./PremiseCreateOrConnectWithoutAuthorInput";
import {PremiseCreateWithoutAuthorInput} from "./PremiseCreateWithoutAuthorInput";
import {PremiseScalarWhereInput} from "./PremiseScalarWhereInput";
import {PremiseUpdateManyWithWhereWithoutAuthorInput} from "./PremiseUpdateManyWithWhereWithoutAuthorInput";
import {PremiseUpdateWithWhereUniqueWithoutAuthorInput} from "./PremiseUpdateWithWhereUniqueWithoutAuthorInput";
import {PremiseUpsertWithWhereUniqueWithoutAuthorInput} from "./PremiseUpsertWithWhereUniqueWithoutAuthorInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateManyWithoutAuthorInput", {
    isAbstract: true
})
export class PremiseUpdateManyWithoutAuthorInput {
    @TypeGraphQL.Field(_type => [PremiseCreateWithoutAuthorInput], {
        nullable: true
    })
    create?: PremiseCreateWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremiseCreateOrConnectWithoutAuthorInput], {
        nullable: true
    })
    connectOrCreate?: PremiseCreateOrConnectWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremiseUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    })
    upsert?: PremiseUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => PremiseCreateManyAuthorInputEnvelope, {
        nullable: true
    })
    createMany?: PremiseCreateManyAuthorInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [PremiseWhereUniqueInput], {
        nullable: true
    })
    set?: PremiseWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremiseWhereUniqueInput], {
        nullable: true
    })
    disconnect?: PremiseWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremiseWhereUniqueInput], {
        nullable: true
    })
    delete?: PremiseWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremiseWhereUniqueInput], {
        nullable: true
    })
    connect?: PremiseWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremiseUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    })
    update?: PremiseUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremiseUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    })
    updateMany?: PremiseUpdateManyWithWhereWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremiseScalarWhereInput], {
        nullable: true
    })
    deleteMany?: PremiseScalarWhereInput[] | undefined;
}
