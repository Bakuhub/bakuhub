"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineOrderByWithRelationInput_1 = require("../../../inputs/TimelineOrderByWithRelationInput");
const TimelineWhereInput_1 = require("../../../inputs/TimelineWhereInput");
const TimelineWhereUniqueInput_1 = require("../../../inputs/TimelineWhereUniqueInput");
let AggregateTimelineArgs = class AggregateTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], AggregateTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTimelineArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], AggregateTimelineArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTimelineArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTimelineArgs.prototype, "skip", void 0);
AggregateTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTimelineArgs);
exports.AggregateTimelineArgs = AggregateTimelineArgs;
