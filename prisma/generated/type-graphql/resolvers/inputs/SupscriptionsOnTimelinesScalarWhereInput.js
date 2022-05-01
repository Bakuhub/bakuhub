"use strict";
var SupscriptionsOnTimelinesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSubscriptionTypeFilter_1 = require("../inputs/EnumSubscriptionTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let SupscriptionsOnTimelinesScalarWhereInput = SupscriptionsOnTimelinesScalarWhereInput_1 = class SupscriptionsOnTimelinesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SupscriptionsOnTimelinesScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SupscriptionsOnTimelinesScalarWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter)
], SupscriptionsOnTimelinesScalarWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SupscriptionsOnTimelinesScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SupscriptionsOnTimelinesScalarWhereInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesScalarWhereInput = SupscriptionsOnTimelinesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesScalarWhereInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesScalarWhereInput);
exports.SupscriptionsOnTimelinesScalarWhereInput = SupscriptionsOnTimelinesScalarWhereInput;
