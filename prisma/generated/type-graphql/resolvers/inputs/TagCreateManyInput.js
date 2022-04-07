"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagCreateManyInput = class TagCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateManyInput.prototype, "label", void 0);
TagCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateManyInput", {
        isAbstract: true
    })
], TagCreateManyInput);
exports.TagCreateManyInput = TagCreateManyInput;
