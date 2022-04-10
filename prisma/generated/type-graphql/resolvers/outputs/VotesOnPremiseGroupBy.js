"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseAvgAggregate_1 = require("../outputs/VotesOnPremiseAvgAggregate");
const VotesOnPremiseCountAggregate_1 = require("../outputs/VotesOnPremiseCountAggregate");
const VotesOnPremiseMaxAggregate_1 = require("../outputs/VotesOnPremiseMaxAggregate");
const VotesOnPremiseMinAggregate_1 = require("../outputs/VotesOnPremiseMinAggregate");
const VotesOnPremiseSumAggregate_1 = require("../outputs/VotesOnPremiseSumAggregate");
let VotesOnPremiseGroupBy = class VotesOnPremiseGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseGroupBy.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseGroupBy.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCountAggregate_1.VotesOnPremiseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCountAggregate_1.VotesOnPremiseCountAggregate)
], VotesOnPremiseGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseAvgAggregate_1.VotesOnPremiseAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseAvgAggregate_1.VotesOnPremiseAvgAggregate)
], VotesOnPremiseGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseSumAggregate_1.VotesOnPremiseSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseSumAggregate_1.VotesOnPremiseSumAggregate)
], VotesOnPremiseGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseMinAggregate_1.VotesOnPremiseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseMinAggregate_1.VotesOnPremiseMinAggregate)
], VotesOnPremiseGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseMaxAggregate_1.VotesOnPremiseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseMaxAggregate_1.VotesOnPremiseMaxAggregate)
], VotesOnPremiseGroupBy.prototype, "_max", void 0);
VotesOnPremiseGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnPremiseGroupBy", {
        isAbstract: true
    })
], VotesOnPremiseGroupBy);
exports.VotesOnPremiseGroupBy = VotesOnPremiseGroupBy;
