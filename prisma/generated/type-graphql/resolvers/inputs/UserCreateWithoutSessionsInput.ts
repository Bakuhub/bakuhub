import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {AccountCreateNestedManyWithoutUserInput} from "./AccountCreateNestedManyWithoutUserInput";
import {PremiseCreateNestedManyWithoutAuthorInput} from "./PremiseCreateNestedManyWithoutAuthorInput";
import {ThreadCreateNestedManyWithoutAuthorInput} from "./ThreadCreateNestedManyWithoutAuthorInput";
import {TimelineCreateNestedManyWithoutAuthorInput} from "./TimelineCreateNestedManyWithoutAuthorInput";
import {VisionCreateNestedManyWithoutAuthorInput} from "./VisionCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {
    isAbstract: true
})
export class UserCreateWithoutSessionsInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    id?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    name?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    email?: string | undefined;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    emailVerified?: Date | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    image?: string | undefined;

    @TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    })
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

    @TypeGraphQL.Field(_type => PremiseCreateNestedManyWithoutAuthorInput, {
        nullable: true
    })
    premise?: PremiseCreateNestedManyWithoutAuthorInput | undefined;

    @TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutAuthorInput, {
        nullable: true
    })
    thread?: ThreadCreateNestedManyWithoutAuthorInput | undefined;

    @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    })
    vision?: VisionCreateNestedManyWithoutAuthorInput | undefined;

    @TypeGraphQL.Field(_type => TimelineCreateNestedManyWithoutAuthorInput, {
        nullable: true
    })
    timeline?: TimelineCreateNestedManyWithoutAuthorInput | undefined;
}
