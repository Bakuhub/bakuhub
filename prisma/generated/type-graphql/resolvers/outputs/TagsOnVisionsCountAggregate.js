"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnVisionsCountAggregate = class TagsOnVisionsCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsCountAggregate.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsCountAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsCountAggregate.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsCountAggregate.prototype, "_all", void 0);
TagsOnVisionsCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnVisionsCountAggregate", {
        isAbstract: true
    })
], TagsOnVisionsCountAggregate);
exports.TagsOnVisionsCountAggregate = TagsOnVisionsCountAggregate;
