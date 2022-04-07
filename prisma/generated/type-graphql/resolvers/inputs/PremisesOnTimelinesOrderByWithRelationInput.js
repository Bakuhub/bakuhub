"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseOrderByWithRelationInput_1 = require("../inputs/PremiseOrderByWithRelationInput");
const TimelineOrderByWithRelationInput_1 = require("../inputs/TimelineOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PremisesOnTimelinesOrderByWithRelationInput = class PremisesOnTimelinesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput)
], PremisesOnTimelinesOrderByWithRelationInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesOrderByWithRelationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput)
], PremisesOnTimelinesOrderByWithRelationInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesOrderByWithRelationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesOrderByWithRelationInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesOrderByWithRelationInput", {
        isAbstract: true
    })
], PremisesOnTimelinesOrderByWithRelationInput);
exports.PremisesOnTimelinesOrderByWithRelationInput = PremisesOnTimelinesOrderByWithRelationInput;
