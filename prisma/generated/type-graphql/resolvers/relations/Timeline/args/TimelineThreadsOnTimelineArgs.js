"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnTimelineOrderByWithRelationInput");
const ThreadsOnTimelineWhereInput_1 = require("../../../inputs/ThreadsOnTimelineWhereInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../../../inputs/ThreadsOnTimelineWhereUniqueInput");
const ThreadsOnTimelineScalarFieldEnum_1 = require("../../../../enums/ThreadsOnTimelineScalarFieldEnum");
let TimelineThreadsOnTimelineArgs = class TimelineThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], TimelineThreadsOnTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineOrderByWithRelationInput_1.ThreadsOnTimelineOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineThreadsOnTimelineArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], TimelineThreadsOnTimelineArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TimelineThreadsOnTimelineArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TimelineThreadsOnTimelineArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarFieldEnum_1.ThreadsOnTimelineScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineThreadsOnTimelineArgs.prototype, "distinct", void 0);
TimelineThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TimelineThreadsOnTimelineArgs);
exports.TimelineThreadsOnTimelineArgs = TimelineThreadsOnTimelineArgs;
