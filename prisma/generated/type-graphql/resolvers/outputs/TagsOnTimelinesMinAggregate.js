"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnTimelinesMinAggregate = class TagsOnTimelinesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnTimelinesMinAggregate.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesMinAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelinesMinAggregate.prototype, "assignedAt", void 0);
TagsOnTimelinesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnTimelinesMinAggregate", {
        isAbstract: true
    })
], TagsOnTimelinesMinAggregate);
exports.TagsOnTimelinesMinAggregate = TagsOnTimelinesMinAggregate;
