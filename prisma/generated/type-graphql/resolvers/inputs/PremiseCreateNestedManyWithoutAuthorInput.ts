import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateManyAuthorInputEnvelope} from "./PremiseCreateManyAuthorInputEnvelope";
import {PremiseCreateOrConnectWithoutAuthorInput} from "./PremiseCreateOrConnectWithoutAuthorInput";
import {PremiseCreateWithoutAuthorInput} from "./PremiseCreateWithoutAuthorInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedManyWithoutAuthorInput", {
    isAbstract: true
})
export class PremiseCreateNestedManyWithoutAuthorInput {
    @TypeGraphQL.Field(_type => [PremiseCreateWithoutAuthorInput], {
        nullable: true
    })
    create?: PremiseCreateWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremiseCreateOrConnectWithoutAuthorInput], {
        nullable: true
    })
    connectOrCreate?: PremiseCreateOrConnectWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => PremiseCreateManyAuthorInputEnvelope, {
        nullable: true
    })
    createMany?: PremiseCreateManyAuthorInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [PremiseWhereUniqueInput], {
        nullable: true
    })
    connect?: PremiseWhereUniqueInput[] | undefined;
}
