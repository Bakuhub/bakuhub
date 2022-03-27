import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCreateNestedManyWithoutPremiseInput} from "./PremisesOnTimelinesCreateNestedManyWithoutPremiseInput";
import {TagsOnPremisesCreateNestedManyWithoutPremiseInput} from "./TagsOnPremisesCreateNestedManyWithoutPremiseInput";
import {ThreadsOnPremiseCreateNestedManyWithoutPremiseInput} from "./ThreadsOnPremiseCreateNestedManyWithoutPremiseInput";
import {UserCreateNestedOneWithoutPremiseInput} from "./UserCreateNestedOneWithoutPremiseInput";
import {PremiseStatus} from "../../enums/PremiseStatus";

@TypeGraphQL.InputType("PremiseCreateWithoutVisionInput", {
    isAbstract: true
})
export class PremiseCreateWithoutVisionInput {
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

    @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    })
    premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    })
    tagsOnPremises?: TagsOnPremisesCreateNestedManyWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    })
    threadsOnPremise?: ThreadsOnPremiseCreateNestedManyWithoutPremiseInput | undefined;
}
