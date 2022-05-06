"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateManyTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnTimelinesCreateManyTagInput = class TagsOnTimelinesCreateManyTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesCreateManyTagInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelinesCreateManyTagInput.prototype, "assignedAt", void 0);
TagsOnTimelinesCreateManyTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateManyTagInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateManyTagInput);
exports.TagsOnTimelinesCreateManyTagInput = TagsOnTimelinesCreateManyTagInput;
