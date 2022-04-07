"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineWhereInput_1 = require("../../../inputs/ThreadsOnTimelineWhereInput");
let DeleteManyThreadsOnTimelineArgs = class DeleteManyThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], DeleteManyThreadsOnTimelineArgs.prototype, "where", void 0);
DeleteManyThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyThreadsOnTimelineArgs);
exports.DeleteManyThreadsOnTimelineArgs = DeleteManyThreadsOnTimelineArgs;
