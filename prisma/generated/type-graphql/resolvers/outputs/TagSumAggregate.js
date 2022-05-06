"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagSumAggregate = class TagSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagSumAggregate.prototype, "id", void 0);
TagSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagSumAggregate", {
        isAbstract: true
    })
], TagSumAggregate);
exports.TagSumAggregate = TagSumAggregate;
