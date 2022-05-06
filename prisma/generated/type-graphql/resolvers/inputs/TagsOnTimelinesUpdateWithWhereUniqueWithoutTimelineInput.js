"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesUpdateWithoutTimelineInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = class TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateWithoutTimelineInput_1.TagsOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateWithoutTimelineInput_1.TagsOnTimelinesUpdateWithoutTimelineInput)
], TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "data", void 0);
TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput);
exports.TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput;
