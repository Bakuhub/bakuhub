import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {MergeRequestCreateOrConnectWithoutVisionInput} from "./MergeRequestCreateOrConnectWithoutVisionInput";
import {MergeRequestCreateWithoutVisionInput} from "./MergeRequestCreateWithoutVisionInput";
import {MergeRequestWhereUniqueInput} from "./MergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("MergeRequestCreateNestedOneWithoutVisionInput", {
    isAbstract: true
})
export class MergeRequestCreateNestedOneWithoutVisionInput {
    @TypeGraphQL.Field(_type => MergeRequestCreateWithoutVisionInput, {
        nullable: true
    })
    create?: MergeRequestCreateWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => MergeRequestCreateOrConnectWithoutVisionInput, {
        nullable: true
    })
    connectOrCreate?: MergeRequestCreateOrConnectWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput, {
        nullable: true
    })
    connect?: MergeRequestWhereUniqueInput | undefined;
}
