"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnVisionsSumAggregate = class TagsOnVisionsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsSumAggregate.prototype, "tagId", void 0);
TagsOnVisionsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnVisionsSumAggregate", {
        isAbstract: true
    })
], TagsOnVisionsSumAggregate);
exports.TagsOnVisionsSumAggregate = TagsOnVisionsSumAggregate;
