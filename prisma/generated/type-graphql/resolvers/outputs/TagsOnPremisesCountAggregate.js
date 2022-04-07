"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremisesCountAggregate = class TagsOnPremisesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesCountAggregate.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesCountAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesCountAggregate.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesCountAggregate.prototype, "_all", void 0);
TagsOnPremisesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnPremisesCountAggregate", {
        isAbstract: true
    })
], TagsOnPremisesCountAggregate);
exports.TagsOnPremisesCountAggregate = TagsOnPremisesCountAggregate;
