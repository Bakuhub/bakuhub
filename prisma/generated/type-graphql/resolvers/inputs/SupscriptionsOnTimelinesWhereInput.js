"use strict";
var SupscriptionsOnTimelinesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSubscriptionTypeFilter_1 = require("../inputs/EnumSubscriptionTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TimelineRelationFilter_1 = require("../inputs/TimelineRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let SupscriptionsOnTimelinesWhereInput = SupscriptionsOnTimelinesWhereInput_1 = class SupscriptionsOnTimelinesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], SupscriptionsOnTimelinesWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SupscriptionsOnTimelinesWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineRelationFilter_1.TimelineRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineRelationFilter_1.TimelineRelationFilter)
], SupscriptionsOnTimelinesWhereInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SupscriptionsOnTimelinesWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter)
], SupscriptionsOnTimelinesWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SupscriptionsOnTimelinesWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SupscriptionsOnTimelinesWhereInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesWhereInput = SupscriptionsOnTimelinesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesWhereInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesWhereInput);
exports.SupscriptionsOnTimelinesWhereInput = SupscriptionsOnTimelinesWhereInput;
