"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnTimelineOrderByWithRelationInput");
const ThreadsOnTimelineWhereInput_1 = require("../../../inputs/ThreadsOnTimelineWhereInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../../../inputs/ThreadsOnTimelineWhereUniqueInput");
let AggregateThreadsOnTimelineArgs = class AggregateThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], AggregateThreadsOnTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineOrderByWithRelationInput_1.ThreadsOnTimelineOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateThreadsOnTimelineArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], AggregateThreadsOnTimelineArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateThreadsOnTimelineArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateThreadsOnTimelineArgs.prototype, "skip", void 0);
AggregateThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateThreadsOnTimelineArgs);
exports.AggregateThreadsOnTimelineArgs = AggregateThreadsOnTimelineArgs;
