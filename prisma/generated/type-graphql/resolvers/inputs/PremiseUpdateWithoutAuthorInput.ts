import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {EnumPremiseStatusFieldUpdateOperationsInput} from "./EnumPremiseStatusFieldUpdateOperationsInput";
import {PremisesOnTimelinesUpdateManyWithoutPremiseInput} from "./PremisesOnTimelinesUpdateManyWithoutPremiseInput";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";
import {TagsOnPremisesUpdateManyWithoutPremiseInput} from "./TagsOnPremisesUpdateManyWithoutPremiseInput";
import {ThreadsOnPremiseUpdateManyWithoutPremiseInput} from "./ThreadsOnPremiseUpdateManyWithoutPremiseInput";
import {VisionUpdateManyWithoutPremiseInput} from "./VisionUpdateManyWithoutPremiseInput";

@TypeGraphQL.InputType("PremiseUpdateWithoutAuthorInput", {
    isAbstract: true
})
export class PremiseUpdateWithoutAuthorInput {
    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    id?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    title?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => EnumPremiseStatusFieldUpdateOperationsInput, {
        nullable: true
    })
    status?: EnumPremiseStatusFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpdateManyWithoutPremiseInput, {
        nullable: true
    })
    vision?: VisionUpdateManyWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutPremiseInput, {
        nullable: true
    })
    premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutPremiseInput, {
        nullable: true
    })
    tagsOnPremises?: TagsOnPremisesUpdateManyWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyWithoutPremiseInput, {
        nullable: true
    })
    threadsOnPremise?: ThreadsOnPremiseUpdateManyWithoutPremiseInput | undefined;
}
