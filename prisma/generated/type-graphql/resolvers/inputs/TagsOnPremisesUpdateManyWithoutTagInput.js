"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpdateManyWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateManyTagInputEnvelope_1 = require("../inputs/TagsOnPremisesCreateManyTagInputEnvelope");
const TagsOnPremisesCreateOrConnectWithoutTagInput_1 = require("../inputs/TagsOnPremisesCreateOrConnectWithoutTagInput");
const TagsOnPremisesCreateWithoutTagInput_1 = require("../inputs/TagsOnPremisesCreateWithoutTagInput");
const TagsOnPremisesScalarWhereInput_1 = require("../inputs/TagsOnPremisesScalarWhereInput");
const TagsOnPremisesUpdateManyWithWhereWithoutTagInput_1 = require("../inputs/TagsOnPremisesUpdateManyWithWhereWithoutTagInput");
const TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput_1 = require("../inputs/TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput");
const TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput_1 = require("../inputs/TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesUpdateManyWithoutTagInput = class TagsOnPremisesUpdateManyWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateWithoutTagInput_1.TagsOnPremisesCreateWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateOrConnectWithoutTagInput_1.TagsOnPremisesCreateOrConnectWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput_1.TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateManyTagInputEnvelope_1.TagsOnPremisesCreateManyTagInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateManyTagInputEnvelope_1.TagsOnPremisesCreateManyTagInputEnvelope)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput_1.TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesUpdateManyWithWhereWithoutTagInput_1.TagsOnPremisesUpdateManyWithWhereWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput_1.TagsOnPremisesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutTagInput.prototype, "deleteMany", void 0);
TagsOnPremisesUpdateManyWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpdateManyWithoutTagInput", {
        isAbstract: true
    })
], TagsOnPremisesUpdateManyWithoutTagInput);
exports.TagsOnPremisesUpdateManyWithoutTagInput = TagsOnPremisesUpdateManyWithoutTagInput;
