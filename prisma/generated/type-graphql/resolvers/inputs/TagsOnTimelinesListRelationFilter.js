"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesWhereInput_1 = require("../inputs/TagsOnTimelinesWhereInput");
let TagsOnTimelinesListRelationFilter = class TagsOnTimelinesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput)
], TagsOnTimelinesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput)
], TagsOnTimelinesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput)
], TagsOnTimelinesListRelationFilter.prototype, "none", void 0);
TagsOnTimelinesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesListRelationFilter", {
        isAbstract: true
    })
], TagsOnTimelinesListRelationFilter);
exports.TagsOnTimelinesListRelationFilter = TagsOnTimelinesListRelationFilter;
