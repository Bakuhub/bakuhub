"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnTimelinesMaxAggregate = class TagsOnTimelinesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnTimelinesMaxAggregate.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesMaxAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelinesMaxAggregate.prototype, "assignedAt", void 0);
TagsOnTimelinesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnTimelinesMaxAggregate", {
        isAbstract: true
    })
], TagsOnTimelinesMaxAggregate);
exports.TagsOnTimelinesMaxAggregate = TagsOnTimelinesMaxAggregate;
