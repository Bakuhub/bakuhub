"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagAvgAggregate = class TagAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagAvgAggregate.prototype, "id", void 0);
TagAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagAvgAggregate", {
        isAbstract: true
    })
], TagAvgAggregate);
exports.TagAvgAggregate = TagAvgAggregate;
