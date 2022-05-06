"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateWithoutTimelineInput");
const TagsOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesUpdateWithoutTimelineInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = class TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateWithoutTimelineInput_1.TagsOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateWithoutTimelineInput_1.TagsOnTimelinesUpdateWithoutTimelineInput)
], TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateWithoutTimelineInput_1.TagsOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateWithoutTimelineInput_1.TagsOnTimelinesCreateWithoutTimelineInput)
], TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "create", void 0);
TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput);
exports.TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput;
