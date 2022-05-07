"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagOrderByWithRelationInput_1 = require("../inputs/TagOrderByWithRelationInput");
const VisionOrderByWithRelationInput_1 = require("../inputs/VisionOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnVisionsOrderByWithRelationInput = class TagsOnVisionsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagOrderByWithRelationInput_1.TagOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagOrderByWithRelationInput_1.TagOrderByWithRelationInput)
], TagsOnVisionsOrderByWithRelationInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsOrderByWithRelationInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionOrderByWithRelationInput_1.VisionOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionOrderByWithRelationInput_1.VisionOrderByWithRelationInput)
], TagsOnVisionsOrderByWithRelationInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsOrderByWithRelationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsOrderByWithRelationInput.prototype, "assignedAt", void 0);
TagsOnVisionsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsOrderByWithRelationInput", {
        isAbstract: true
    })
], TagsOnVisionsOrderByWithRelationInput);
exports.TagsOnVisionsOrderByWithRelationInput = TagsOnVisionsOrderByWithRelationInput;
