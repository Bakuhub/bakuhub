"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PremisesOnTimelinesCountAggregate = class PremisesOnTimelinesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PremisesOnTimelinesCountAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PremisesOnTimelinesCountAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PremisesOnTimelinesCountAggregate.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PremisesOnTimelinesCountAggregate.prototype, "_all", void 0);
PremisesOnTimelinesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PremisesOnTimelinesCountAggregate", {
        isAbstract: true
    })
], PremisesOnTimelinesCountAggregate);
exports.PremisesOnTimelinesCountAggregate = PremisesOnTimelinesCountAggregate;
