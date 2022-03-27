import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {MergeRequestCreateNestedOneWithoutVisionInput} from "./MergeRequestCreateNestedOneWithoutVisionInput";
import {ThreadsOnVisionCreateNestedManyWithoutVisionInput} from "./ThreadsOnVisionCreateNestedManyWithoutVisionInput";
import {UserCreateNestedOneWithoutVisionInput} from "./UserCreateNestedOneWithoutVisionInput";
import {VisionCreateNestedManyWithoutPrevVisionInput} from "./VisionCreateNestedManyWithoutPrevVisionInput";
import {VisionCreateNestedOneWithoutNextVisionInput} from "./VisionCreateNestedOneWithoutNextVisionInput";

@TypeGraphQL.InputType("VisionCreateWithoutPremiseInput", {
    isAbstract: true
})
export class VisionCreateWithoutPremiseInput {
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
    activityDate?: Date | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    description?: string | undefined;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    createdAt?: Date | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    reference?: string | undefined;

    @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVisionInput, {
        nullable: true
    })
    author?: UserCreateNestedOneWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    thumbnail?: string | undefined;

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    draftMode?: boolean | undefined;

    @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutNextVisionInput, {
        nullable: true
    })
    prevVision?: VisionCreateNestedOneWithoutNextVisionInput | undefined;

    @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPrevVisionInput, {
        nullable: true
    })
    nextVision?: VisionCreateNestedManyWithoutPrevVisionInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionCreateNestedManyWithoutVisionInput, {
        nullable: true
    })
    threadsOnVision?: ThreadsOnVisionCreateNestedManyWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutVisionInput, {
        nullable: true
    })
    mergeRequest?: MergeRequestCreateNestedOneWithoutVisionInput | undefined;
}
