"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePremisesOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCountAggregate_1 = require("../outputs/PremisesOnTimelinesCountAggregate");
const PremisesOnTimelinesMaxAggregate_1 = require("../outputs/PremisesOnTimelinesMaxAggregate");
const PremisesOnTimelinesMinAggregate_1 = require("../outputs/PremisesOnTimelinesMinAggregate");
let AggregatePremisesOnTimelines = class AggregatePremisesOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCountAggregate_1.PremisesOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCountAggregate_1.PremisesOnTimelinesCountAggregate)
], AggregatePremisesOnTimelines.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesMinAggregate_1.PremisesOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesMinAggregate_1.PremisesOnTimelinesMinAggregate)
], AggregatePremisesOnTimelines.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesMaxAggregate_1.PremisesOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesMaxAggregate_1.PremisesOnTimelinesMaxAggregate)
], AggregatePremisesOnTimelines.prototype, "_max", void 0);
AggregatePremisesOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePremisesOnTimelines", {
        isAbstract: true
    })
], AggregatePremisesOnTimelines);
exports.AggregatePremisesOnTimelines = AggregatePremisesOnTimelines;
