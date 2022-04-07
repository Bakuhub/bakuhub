"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremisesAvgAggregate = class TagsOnPremisesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesAvgAggregate.prototype, "tagId", void 0);
TagsOnPremisesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnPremisesAvgAggregate", {
        isAbstract: true
    })
], TagsOnPremisesAvgAggregate);
exports.TagsOnPremisesAvgAggregate = TagsOnPremisesAvgAggregate;
