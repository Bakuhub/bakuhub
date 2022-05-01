"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSupscriptionsOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCountAggregate_1 = require("../outputs/SupscriptionsOnTimelinesCountAggregate");
const SupscriptionsOnTimelinesMaxAggregate_1 = require("../outputs/SupscriptionsOnTimelinesMaxAggregate");
const SupscriptionsOnTimelinesMinAggregate_1 = require("../outputs/SupscriptionsOnTimelinesMinAggregate");
let AggregateSupscriptionsOnTimelines = class AggregateSupscriptionsOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCountAggregate_1.SupscriptionsOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCountAggregate_1.SupscriptionsOnTimelinesCountAggregate)
], AggregateSupscriptionsOnTimelines.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesMinAggregate_1.SupscriptionsOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesMinAggregate_1.SupscriptionsOnTimelinesMinAggregate)
], AggregateSupscriptionsOnTimelines.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesMaxAggregate_1.SupscriptionsOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesMaxAggregate_1.SupscriptionsOnTimelinesMaxAggregate)
], AggregateSupscriptionsOnTimelines.prototype, "_max", void 0);
AggregateSupscriptionsOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSupscriptionsOnTimelines", {
        isAbstract: true
    })
], AggregateSupscriptionsOnTimelines);
exports.AggregateSupscriptionsOnTimelines = AggregateSupscriptionsOnTimelines;
