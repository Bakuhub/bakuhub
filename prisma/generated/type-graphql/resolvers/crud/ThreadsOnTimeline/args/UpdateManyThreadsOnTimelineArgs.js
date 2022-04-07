"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineUpdateManyMutationInput_1 = require("../../../inputs/ThreadsOnTimelineUpdateManyMutationInput");
const ThreadsOnTimelineWhereInput_1 = require("../../../inputs/ThreadsOnTimelineWhereInput");
let UpdateManyThreadsOnTimelineArgs = class UpdateManyThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyMutationInput_1.ThreadsOnTimelineUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateManyMutationInput_1.ThreadsOnTimelineUpdateManyMutationInput)
], UpdateManyThreadsOnTimelineArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], UpdateManyThreadsOnTimelineArgs.prototype, "where", void 0);
UpdateManyThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyThreadsOnTimelineArgs);
exports.UpdateManyThreadsOnTimelineArgs = UpdateManyThreadsOnTimelineArgs;
