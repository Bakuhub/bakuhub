"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnTimelinesCreateManyInput = class TagsOnTimelinesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnTimelinesCreateManyInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesCreateManyInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelinesCreateManyInput.prototype, "assignedAt", void 0);
TagsOnTimelinesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateManyInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateManyInput);
exports.TagsOnTimelinesCreateManyInput = TagsOnTimelinesCreateManyInput;
