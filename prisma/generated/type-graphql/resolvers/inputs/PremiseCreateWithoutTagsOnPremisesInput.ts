import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCreateNestedManyWithoutPremiseInput} from "./PremisesOnTimelinesCreateNestedManyWithoutPremiseInput";
import {ThreadsOnPremiseCreateNestedManyWithoutPremiseInput} from "./ThreadsOnPremiseCreateNestedManyWithoutPremiseInput";
import {UserCreateNestedOneWithoutPremiseInput} from "./UserCreateNestedOneWithoutPremiseInput";
import {VisionCreateNestedManyWithoutPremiseInput} from "./VisionCreateNestedManyWithoutPremiseInput";
import {PremiseStatus} from "../../enums/PremiseStatus";

@TypeGraphQL.InputType("PremiseCreateWithoutTagsOnPremisesInput", {
    isAbstract: true
})
export class PremiseCreateWithoutTagsOnPremisesInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    id?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    title!: string;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    createdAt?: Date | undefined;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    updatedAt?: Date | undefined;

    @TypeGraphQL.Field(_type => PremiseStatus, {
        nullable: false
    })
    status!: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION";

    @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPremiseInput, {
        nullable: true
    })
    author?: UserCreateNestedOneWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPremiseInput, {
        nullable: true
    })
    vision?: VisionCreateNestedManyWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    })
    premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    })
    threadsOnPremise?: ThreadsOnPremiseCreateNestedManyWithoutPremiseInput | undefined;
}
