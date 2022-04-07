"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpdateManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateManyPremiseInputEnvelope_1 = require("../inputs/TagsOnPremisesCreateManyPremiseInputEnvelope");
const TagsOnPremisesCreateOrConnectWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateOrConnectWithoutPremiseInput");
const TagsOnPremisesCreateWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateWithoutPremiseInput");
const TagsOnPremisesScalarWhereInput_1 = require("../inputs/TagsOnPremisesScalarWhereInput");
const TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput");
const TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput");
const TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesUpdateManyWithoutPremiseInput = class TagsOnPremisesUpdateManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateWithoutPremiseInput_1.TagsOnPremisesCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateOrConnectWithoutPremiseInput_1.TagsOnPremisesCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput_1.TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateManyPremiseInputEnvelope_1.TagsOnPremisesCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateManyPremiseInputEnvelope_1.TagsOnPremisesCreateManyPremiseInputEnvelope)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput_1.TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput_1.TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput_1.TagsOnPremisesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesUpdateManyWithoutPremiseInput.prototype, "deleteMany", void 0);
TagsOnPremisesUpdateManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpdateManyWithoutPremiseInput", {
        isAbstract: true
    })
], TagsOnPremisesUpdateManyWithoutPremiseInput);
exports.TagsOnPremisesUpdateManyWithoutPremiseInput = TagsOnPremisesUpdateManyWithoutPremiseInput;
