"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnTimelines = class TagsOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnTimelines.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelines.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelines.prototype, "assignedAt", void 0);
TagsOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnTimelines", {
        isAbstract: true
    })
], TagsOnTimelines);
exports.TagsOnTimelines = TagsOnTimelines;
