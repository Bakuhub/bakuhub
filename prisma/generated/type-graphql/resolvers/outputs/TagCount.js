"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagCount = class TagCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagCount.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagCount.prototype, "tagsOnTimelines", void 0);
TagCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagCount", {
        isAbstract: true
    })
], TagCount);
exports.TagCount = TagCount;
