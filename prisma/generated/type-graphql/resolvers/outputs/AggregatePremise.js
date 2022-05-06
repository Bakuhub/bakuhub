"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePremise = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCountAggregate_1 = require("../outputs/PremiseCountAggregate");
const PremiseMaxAggregate_1 = require("../outputs/PremiseMaxAggregate");
const PremiseMinAggregate_1 = require("../outputs/PremiseMinAggregate");
let AggregatePremise = class AggregatePremise {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCountAggregate_1.PremiseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCountAggregate_1.PremiseCountAggregate)
], AggregatePremise.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseMinAggregate_1.PremiseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseMinAggregate_1.PremiseMinAggregate)
], AggregatePremise.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseMaxAggregate_1.PremiseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseMaxAggregate_1.PremiseMaxAggregate)
], AggregatePremise.prototype, "_max", void 0);
AggregatePremise = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePremise", {
        isAbstract: true
    })
], AggregatePremise);
exports.AggregatePremise = AggregatePremise;
