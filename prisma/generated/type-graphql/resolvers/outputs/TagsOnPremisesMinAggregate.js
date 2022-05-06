"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremisesMinAggregate = class TagsOnPremisesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesMinAggregate.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesMinAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremisesMinAggregate.prototype, "assignedAt", void 0);
TagsOnPremisesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnPremisesMinAggregate", {
        isAbstract: true
    })
], TagsOnPremisesMinAggregate);
exports.TagsOnPremisesMinAggregate = TagsOnPremisesMinAggregate;
