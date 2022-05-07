"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateManyTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnVisionsCreateManyTagInput = class TagsOnVisionsCreateManyTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsCreateManyTagInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnVisionsCreateManyTagInput.prototype, "assignedAt", void 0);
TagsOnVisionsCreateManyTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateManyTagInput", {
        isAbstract: true
    })
], TagsOnVisionsCreateManyTagInput);
exports.TagsOnVisionsCreateManyTagInput = TagsOnVisionsCreateManyTagInput;
