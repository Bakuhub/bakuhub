"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReferenceCountAggregate = class ReferenceCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReferenceCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReferenceCountAggregate.prototype, "_all", void 0);
ReferenceCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReferenceCountAggregate", {
        isAbstract: true
    })
], ReferenceCountAggregate);
exports.ReferenceCountAggregate = ReferenceCountAggregate;
