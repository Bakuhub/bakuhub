"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReferenceMaxAggregate = class ReferenceMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceMaxAggregate.prototype, "id", void 0);
ReferenceMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReferenceMaxAggregate", {
        isAbstract: true
    })
], ReferenceMaxAggregate);
exports.ReferenceMaxAggregate = ReferenceMaxAggregate;
