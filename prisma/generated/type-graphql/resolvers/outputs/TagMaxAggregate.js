"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagMaxAggregate = class TagMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagMaxAggregate.prototype, "label", void 0);
TagMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagMaxAggregate", {
        isAbstract: true
    })
], TagMaxAggregate);
exports.TagMaxAggregate = TagMaxAggregate;
