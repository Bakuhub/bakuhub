"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnVisionsCreateManyInput = class TagsOnVisionsCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsCreateManyInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsCreateManyInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnVisionsCreateManyInput.prototype, "assignedAt", void 0);
TagsOnVisionsCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateManyInput", {
        isAbstract: true
    })
], TagsOnVisionsCreateManyInput);
exports.TagsOnVisionsCreateManyInput = TagsOnVisionsCreateManyInput;
