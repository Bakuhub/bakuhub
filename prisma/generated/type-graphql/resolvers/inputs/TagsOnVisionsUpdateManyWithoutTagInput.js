"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpdateManyWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateManyTagInputEnvelope_1 = require("../inputs/TagsOnVisionsCreateManyTagInputEnvelope");
const TagsOnVisionsCreateOrConnectWithoutTagInput_1 = require("../inputs/TagsOnVisionsCreateOrConnectWithoutTagInput");
const TagsOnVisionsCreateWithoutTagInput_1 = require("../inputs/TagsOnVisionsCreateWithoutTagInput");
const TagsOnVisionsScalarWhereInput_1 = require("../inputs/TagsOnVisionsScalarWhereInput");
const TagsOnVisionsUpdateManyWithWhereWithoutTagInput_1 = require("../inputs/TagsOnVisionsUpdateManyWithWhereWithoutTagInput");
const TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput_1 = require("../inputs/TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput");
const TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput_1 = require("../inputs/TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsUpdateManyWithoutTagInput = class TagsOnVisionsUpdateManyWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateWithoutTagInput_1.TagsOnVisionsCreateWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateOrConnectWithoutTagInput_1.TagsOnVisionsCreateOrConnectWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput_1.TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateManyTagInputEnvelope_1.TagsOnVisionsCreateManyTagInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateManyTagInputEnvelope_1.TagsOnVisionsCreateManyTagInputEnvelope)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput_1.TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsUpdateManyWithWhereWithoutTagInput_1.TagsOnVisionsUpdateManyWithWhereWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsScalarWhereInput_1.TagsOnVisionsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutTagInput.prototype, "deleteMany", void 0);
TagsOnVisionsUpdateManyWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpdateManyWithoutTagInput", {
        isAbstract: true
    })
], TagsOnVisionsUpdateManyWithoutTagInput);
exports.TagsOnVisionsUpdateManyWithoutTagInput = TagsOnVisionsUpdateManyWithoutTagInput;
