"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateNestedOneWithoutTagsOnTimelinesInput_1 = require("../inputs/TagCreateNestedOneWithoutTagsOnTimelinesInput");
const TimelineCreateNestedOneWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutTagsOnTimelinesInput");
let TagsOnTimelinesCreateInput = class TagsOnTimelinesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnTimelinesInput_1.TagCreateNestedOneWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateNestedOneWithoutTagsOnTimelinesInput_1.TagCreateNestedOneWithoutTagsOnTimelinesInput)
], TagsOnTimelinesCreateInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutTagsOnTimelinesInput_1.TimelineCreateNestedOneWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutTagsOnTimelinesInput_1.TimelineCreateNestedOneWithoutTagsOnTimelinesInput)
], TagsOnTimelinesCreateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelinesCreateInput.prototype, "assignedAt", void 0);
TagsOnTimelinesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateInput);
exports.TagsOnTimelinesCreateInput = TagsOnTimelinesCreateInput;
