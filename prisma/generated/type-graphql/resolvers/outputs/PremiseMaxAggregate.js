"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let PremiseMaxAggregate = class PremiseMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseMaxAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseMaxAggregate.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseMaxAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseMaxAggregate.prototype, "authorId", void 0);
PremiseMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PremiseMaxAggregate", {
        isAbstract: true
    })
], PremiseMaxAggregate);
exports.PremiseMaxAggregate = PremiseMaxAggregate;
