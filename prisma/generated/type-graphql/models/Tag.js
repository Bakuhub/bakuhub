"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCount_1 = require("../resolvers/outputs/TagCount");
let Tag = class Tag {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tag.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tag.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCount_1.TagCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCount_1.TagCount)
], Tag.prototype, "_count", void 0);
Tag = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tag", {
        isAbstract: true
    })
], Tag);
exports.Tag = Tag;
