"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnVisionsMinAggregate = class TagsOnVisionsMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsMinAggregate.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsMinAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnVisionsMinAggregate.prototype, "assignedAt", void 0);
TagsOnVisionsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnVisionsMinAggregate", {
        isAbstract: true
    })
], TagsOnVisionsMinAggregate);
exports.TagsOnVisionsMinAggregate = TagsOnVisionsMinAggregate;
