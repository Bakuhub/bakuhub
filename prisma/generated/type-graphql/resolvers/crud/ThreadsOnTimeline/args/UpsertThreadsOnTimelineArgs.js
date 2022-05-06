"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateInput_1 = require("../../../inputs/ThreadsOnTimelineCreateInput");
const ThreadsOnTimelineUpdateInput_1 = require("../../../inputs/ThreadsOnTimelineUpdateInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../../../inputs/ThreadsOnTimelineWhereUniqueInput");
let UpsertThreadsOnTimelineArgs = class UpsertThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], UpsertThreadsOnTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateInput_1.ThreadsOnTimelineCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateInput_1.ThreadsOnTimelineCreateInput)
], UpsertThreadsOnTimelineArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateInput_1.ThreadsOnTimelineUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateInput_1.ThreadsOnTimelineUpdateInput)
], UpsertThreadsOnTimelineArgs.prototype, "update", void 0);
UpsertThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertThreadsOnTimelineArgs);
exports.UpsertThreadsOnTimelineArgs = UpsertThreadsOnTimelineArgs;
