"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCountAggregate_1 = require("../outputs/SupscriptionsOnTimelinesCountAggregate");
const SupscriptionsOnTimelinesMaxAggregate_1 = require("../outputs/SupscriptionsOnTimelinesMaxAggregate");
const SupscriptionsOnTimelinesMinAggregate_1 = require("../outputs/SupscriptionsOnTimelinesMinAggregate");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SupscriptionsOnTimelinesGroupBy = class SupscriptionsOnTimelinesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesGroupBy.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCountAggregate_1.SupscriptionsOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCountAggregate_1.SupscriptionsOnTimelinesCountAggregate)
], SupscriptionsOnTimelinesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesMinAggregate_1.SupscriptionsOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesMinAggregate_1.SupscriptionsOnTimelinesMinAggregate)
], SupscriptionsOnTimelinesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesMaxAggregate_1.SupscriptionsOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesMaxAggregate_1.SupscriptionsOnTimelinesMaxAggregate)
], SupscriptionsOnTimelinesGroupBy.prototype, "_max", void 0);
SupscriptionsOnTimelinesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SupscriptionsOnTimelinesGroupBy", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesGroupBy);
exports.SupscriptionsOnTimelinesGroupBy = SupscriptionsOnTimelinesGroupBy;
