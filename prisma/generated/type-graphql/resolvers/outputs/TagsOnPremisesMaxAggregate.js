"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremisesMaxAggregate = class TagsOnPremisesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesMaxAggregate.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesMaxAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremisesMaxAggregate.prototype, "assignedAt", void 0);
TagsOnPremisesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnPremisesMaxAggregate", {
        isAbstract: true
    })
], TagsOnPremisesMaxAggregate);
exports.TagsOnPremisesMaxAggregate = TagsOnPremisesMaxAggregate;
