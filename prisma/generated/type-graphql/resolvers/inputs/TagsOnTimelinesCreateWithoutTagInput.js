"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutTagsOnTimelinesInput");
let TagsOnTimelinesCreateWithoutTagInput = class TagsOnTimelinesCreateWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutTagsOnTimelinesInput_1.TimelineCreateNestedOneWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutTagsOnTimelinesInput_1.TimelineCreateNestedOneWithoutTagsOnTimelinesInput)
], TagsOnTimelinesCreateWithoutTagInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelinesCreateWithoutTagInput.prototype, "assignedAt", void 0);
TagsOnTimelinesCreateWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateWithoutTagInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateWithoutTagInput);
exports.TagsOnTimelinesCreateWithoutTagInput = TagsOnTimelinesCreateWithoutTagInput;
