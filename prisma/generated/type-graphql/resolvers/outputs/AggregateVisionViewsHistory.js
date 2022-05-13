"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVisionViewsHistory = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCountAggregate_1 = require("../outputs/VisionViewsHistoryCountAggregate");
const VisionViewsHistoryMaxAggregate_1 = require("../outputs/VisionViewsHistoryMaxAggregate");
const VisionViewsHistoryMinAggregate_1 = require("../outputs/VisionViewsHistoryMinAggregate");
let AggregateVisionViewsHistory = class AggregateVisionViewsHistory {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCountAggregate_1.VisionViewsHistoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCountAggregate_1.VisionViewsHistoryCountAggregate)
], AggregateVisionViewsHistory.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryMinAggregate_1.VisionViewsHistoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryMinAggregate_1.VisionViewsHistoryMinAggregate)
], AggregateVisionViewsHistory.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryMaxAggregate_1.VisionViewsHistoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryMaxAggregate_1.VisionViewsHistoryMaxAggregate)
], AggregateVisionViewsHistory.prototype, "_max", void 0);
AggregateVisionViewsHistory = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateVisionViewsHistory", {
        isAbstract: true
    })
], AggregateVisionViewsHistory);
exports.AggregateVisionViewsHistory = AggregateVisionViewsHistory;
