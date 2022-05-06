"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnTimelinesAvgAggregate = class TagsOnTimelinesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnTimelinesAvgAggregate.prototype, "tagId", void 0);
TagsOnTimelinesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnTimelinesAvgAggregate", {
        isAbstract: true
    })
], TagsOnTimelinesAvgAggregate);
exports.TagsOnTimelinesAvgAggregate = TagsOnTimelinesAvgAggregate;
