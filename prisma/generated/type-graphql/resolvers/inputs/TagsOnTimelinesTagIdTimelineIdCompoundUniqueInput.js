"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput = class TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput.prototype, "timelineId", void 0);
TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput", {
        isAbstract: true
    })
], TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput);
exports.TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput = TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput;
