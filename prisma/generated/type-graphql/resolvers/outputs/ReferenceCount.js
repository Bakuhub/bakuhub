"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReferenceCount = class ReferenceCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReferenceCount.prototype, "snapshots", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReferenceCount.prototype, "vision", void 0);
ReferenceCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReferenceCount", {
        isAbstract: true
    })
], ReferenceCount);
exports.ReferenceCount = ReferenceCount;
