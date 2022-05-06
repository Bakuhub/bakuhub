"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateManyTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnTimelinesCreateManyTimelineInput = class TagsOnTimelinesCreateManyTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnTimelinesCreateManyTimelineInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelinesCreateManyTimelineInput.prototype, "assignedAt", void 0);
TagsOnTimelinesCreateManyTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateManyTimelineInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateManyTimelineInput);
exports.TagsOnTimelinesCreateManyTimelineInput = TagsOnTimelinesCreateManyTimelineInput;
