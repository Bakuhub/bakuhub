"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpdateManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/TagsOnTimelinesCreateManyTimelineInputEnvelope");
const TagsOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateOrConnectWithoutTimelineInput");
const TagsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateWithoutTimelineInput");
const TagsOnTimelinesScalarWhereInput_1 = require("../inputs/TagsOnTimelinesScalarWhereInput");
const TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput");
const TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput");
const TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesUpdateManyWithoutTimelineInput = class TagsOnTimelinesUpdateManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateWithoutTimelineInput_1.TagsOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateOrConnectWithoutTimelineInput_1.TagsOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1.TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateManyTimelineInputEnvelope_1.TagsOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateManyTimelineInputEnvelope_1.TagsOnTimelinesCreateManyTimelineInputEnvelope)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1.TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1.TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput_1.TagsOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "deleteMany", void 0);
TagsOnTimelinesUpdateManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpdateManyWithoutTimelineInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpdateManyWithoutTimelineInput);
exports.TagsOnTimelinesUpdateManyWithoutTimelineInput = TagsOnTimelinesUpdateManyWithoutTimelineInput;
