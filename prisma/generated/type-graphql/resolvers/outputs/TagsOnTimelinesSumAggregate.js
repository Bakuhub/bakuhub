"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnTimelinesSumAggregate = class TagsOnTimelinesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnTimelinesSumAggregate.prototype, "tagId", void 0);
TagsOnTimelinesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnTimelinesSumAggregate", {
        isAbstract: true
    })
], TagsOnTimelinesSumAggregate);
exports.TagsOnTimelinesSumAggregate = TagsOnTimelinesSumAggregate;
