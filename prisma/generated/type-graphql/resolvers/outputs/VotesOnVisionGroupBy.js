"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionAvgAggregate_1 = require("../outputs/VotesOnVisionAvgAggregate");
const VotesOnVisionCountAggregate_1 = require("../outputs/VotesOnVisionCountAggregate");
const VotesOnVisionMaxAggregate_1 = require("../outputs/VotesOnVisionMaxAggregate");
const VotesOnVisionMinAggregate_1 = require("../outputs/VotesOnVisionMinAggregate");
const VotesOnVisionSumAggregate_1 = require("../outputs/VotesOnVisionSumAggregate");
let VotesOnVisionGroupBy = class VotesOnVisionGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionGroupBy.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnVisionGroupBy.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCountAggregate_1.VotesOnVisionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCountAggregate_1.VotesOnVisionCountAggregate)
], VotesOnVisionGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionAvgAggregate_1.VotesOnVisionAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionAvgAggregate_1.VotesOnVisionAvgAggregate)
], VotesOnVisionGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionSumAggregate_1.VotesOnVisionSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionSumAggregate_1.VotesOnVisionSumAggregate)
], VotesOnVisionGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionMinAggregate_1.VotesOnVisionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionMinAggregate_1.VotesOnVisionMinAggregate)
], VotesOnVisionGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionMaxAggregate_1.VotesOnVisionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionMaxAggregate_1.VotesOnVisionMaxAggregate)
], VotesOnVisionGroupBy.prototype, "_max", void 0);
VotesOnVisionGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnVisionGroupBy", {
        isAbstract: true
    })
], VotesOnVisionGroupBy);
exports.VotesOnVisionGroupBy = VotesOnVisionGroupBy;
