"use strict";
var PremisesOnTimelinesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let PremisesOnTimelinesScalarWhereInput = PremisesOnTimelinesScalarWhereInput_1 = class PremisesOnTimelinesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PremisesOnTimelinesScalarWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PremisesOnTimelinesScalarWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PremisesOnTimelinesScalarWhereInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesScalarWhereInput = PremisesOnTimelinesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesScalarWhereInput", {
        isAbstract: true
    })
], PremisesOnTimelinesScalarWhereInput);
exports.PremisesOnTimelinesScalarWhereInput = PremisesOnTimelinesScalarWhereInput;
