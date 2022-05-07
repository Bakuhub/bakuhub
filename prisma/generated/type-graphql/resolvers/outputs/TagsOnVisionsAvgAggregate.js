"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnVisionsAvgAggregate = class TagsOnVisionsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsAvgAggregate.prototype, "tagId", void 0);
TagsOnVisionsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnVisionsAvgAggregate", {
        isAbstract: true
    })
], TagsOnVisionsAvgAggregate);
exports.TagsOnVisionsAvgAggregate = TagsOnVisionsAvgAggregate;
