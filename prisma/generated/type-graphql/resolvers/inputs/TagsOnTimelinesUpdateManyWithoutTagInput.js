"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpdateManyWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateManyTagInputEnvelope_1 = require("../inputs/TagsOnTimelinesCreateManyTagInputEnvelope");
const TagsOnTimelinesCreateOrConnectWithoutTagInput_1 = require("../inputs/TagsOnTimelinesCreateOrConnectWithoutTagInput");
const TagsOnTimelinesCreateWithoutTagInput_1 = require("../inputs/TagsOnTimelinesCreateWithoutTagInput");
const TagsOnTimelinesScalarWhereInput_1 = require("../inputs/TagsOnTimelinesScalarWhereInput");
const TagsOnTimelinesUpdateManyWithWhereWithoutTagInput_1 = require("../inputs/TagsOnTimelinesUpdateManyWithWhereWithoutTagInput");
const TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput_1 = require("../inputs/TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput");
const TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput_1 = require("../inputs/TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesUpdateManyWithoutTagInput = class TagsOnTimelinesUpdateManyWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateWithoutTagInput_1.TagsOnTimelinesCreateWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateOrConnectWithoutTagInput_1.TagsOnTimelinesCreateOrConnectWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput_1.TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateManyTagInputEnvelope_1.TagsOnTimelinesCreateManyTagInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateManyTagInputEnvelope_1.TagsOnTimelinesCreateManyTagInputEnvelope)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput_1.TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesUpdateManyWithWhereWithoutTagInput_1.TagsOnTimelinesUpdateManyWithWhereWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput_1.TagsOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTagInput.prototype, "deleteMany", void 0);
TagsOnTimelinesUpdateManyWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpdateManyWithoutTagInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpdateManyWithoutTagInput);
exports.TagsOnTimelinesUpdateManyWithoutTagInput = TagsOnTimelinesUpdateManyWithoutTagInput;
