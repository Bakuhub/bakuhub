"use strict";
var PremisesOnTimelinesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const PremiseRelationFilter_1 = require("../inputs/PremiseRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TimelineRelationFilter_1 = require("../inputs/TimelineRelationFilter");
let PremisesOnTimelinesWhereInput = PremisesOnTimelinesWhereInput_1 = class PremisesOnTimelinesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineRelationFilter_1.TimelineRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineRelationFilter_1.TimelineRelationFilter)
], PremisesOnTimelinesWhereInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PremisesOnTimelinesWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseRelationFilter_1.PremiseRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseRelationFilter_1.PremiseRelationFilter)
], PremisesOnTimelinesWhereInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PremisesOnTimelinesWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PremisesOnTimelinesWhereInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesWhereInput = PremisesOnTimelinesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesWhereInput", {
        isAbstract: true
    })
], PremisesOnTimelinesWhereInput);
exports.PremisesOnTimelinesWhereInput = PremisesOnTimelinesWhereInput;
