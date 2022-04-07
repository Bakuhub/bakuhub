"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCountAggregate_1 = require("../outputs/PremiseCountAggregate");
const PremiseMaxAggregate_1 = require("../outputs/PremiseMaxAggregate");
const PremiseMinAggregate_1 = require("../outputs/PremiseMinAggregate");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let PremiseGroupBy = class PremiseGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCountAggregate_1.PremiseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCountAggregate_1.PremiseCountAggregate)
], PremiseGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseMinAggregate_1.PremiseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseMinAggregate_1.PremiseMinAggregate)
], PremiseGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseMaxAggregate_1.PremiseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseMaxAggregate_1.PremiseMaxAggregate)
], PremiseGroupBy.prototype, "_max", void 0);
PremiseGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PremiseGroupBy", {
        isAbstract: true
    })
], PremiseGroupBy);
exports.PremiseGroupBy = PremiseGroupBy;
