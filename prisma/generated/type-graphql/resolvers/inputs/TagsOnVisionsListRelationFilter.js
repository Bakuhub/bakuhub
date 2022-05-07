"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsWhereInput_1 = require("../inputs/TagsOnVisionsWhereInput");
let TagsOnVisionsListRelationFilter = class TagsOnVisionsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput)
], TagsOnVisionsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput)
], TagsOnVisionsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput)
], TagsOnVisionsListRelationFilter.prototype, "none", void 0);
TagsOnVisionsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsListRelationFilter", {
        isAbstract: true
    })
], TagsOnVisionsListRelationFilter);
exports.TagsOnVisionsListRelationFilter = TagsOnVisionsListRelationFilter;
