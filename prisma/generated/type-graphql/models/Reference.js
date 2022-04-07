"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reference = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCount_1 = require("../resolvers/outputs/ReferenceCount");
let Reference = class Reference {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Reference.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCount_1.ReferenceCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCount_1.ReferenceCount)
], Reference.prototype, "_count", void 0);
Reference = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Reference", {
        isAbstract: true
    })
], Reference);
exports.Reference = Reference;
