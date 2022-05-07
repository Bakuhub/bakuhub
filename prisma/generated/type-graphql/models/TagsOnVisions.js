"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisions = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnVisions = class TagsOnVisions {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisions.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisions.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnVisions.prototype, "assignedAt", void 0);
TagsOnVisions = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnVisions", {
        isAbstract: true
    })
], TagsOnVisions);
exports.TagsOnVisions = TagsOnVisions;
