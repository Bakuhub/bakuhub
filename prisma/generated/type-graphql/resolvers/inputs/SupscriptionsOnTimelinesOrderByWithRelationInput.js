"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineOrderByWithRelationInput_1 = require("../inputs/TimelineOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SupscriptionsOnTimelinesOrderByWithRelationInput = class SupscriptionsOnTimelinesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], SupscriptionsOnTimelinesOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput)
], SupscriptionsOnTimelinesOrderByWithRelationInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithRelationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithRelationInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesOrderByWithRelationInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesOrderByWithRelationInput);
exports.SupscriptionsOnTimelinesOrderByWithRelationInput = SupscriptionsOnTimelinesOrderByWithRelationInput;
