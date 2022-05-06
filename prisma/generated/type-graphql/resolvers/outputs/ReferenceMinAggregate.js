"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReferenceMinAggregate = class ReferenceMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceMinAggregate.prototype, "id", void 0);
ReferenceMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReferenceMinAggregate", {
        isAbstract: true
    })
], ReferenceMinAggregate);
exports.ReferenceMinAggregate = ReferenceMinAggregate;
