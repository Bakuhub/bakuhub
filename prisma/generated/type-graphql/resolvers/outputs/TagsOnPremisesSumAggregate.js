"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremisesSumAggregate = class TagsOnPremisesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesSumAggregate.prototype, "tagId", void 0);
TagsOnPremisesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnPremisesSumAggregate", {
        isAbstract: true
    })
], TagsOnPremisesSumAggregate);
exports.TagsOnPremisesSumAggregate = TagsOnPremisesSumAggregate;
