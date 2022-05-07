"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnVisionsMaxAggregate = class TagsOnVisionsMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsMaxAggregate.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsMaxAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnVisionsMaxAggregate.prototype, "assignedAt", void 0);
TagsOnVisionsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnVisionsMaxAggregate", {
        isAbstract: true
    })
], TagsOnVisionsMaxAggregate);
exports.TagsOnVisionsMaxAggregate = TagsOnVisionsMaxAggregate;
