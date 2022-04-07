"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremises = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremises = class TagsOnPremises {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremises.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremises.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremises.prototype, "assignedAt", void 0);
TagsOnPremises = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnPremises", {
        isAbstract: true
    })
], TagsOnPremises);
exports.TagsOnPremises = TagsOnPremises;
