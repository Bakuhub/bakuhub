"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineUpdateInput_1 = require("../../../inputs/ThreadsOnTimelineUpdateInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../../../inputs/ThreadsOnTimelineWhereUniqueInput");
let UpdateThreadsOnTimelineArgs = class UpdateThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateInput_1.ThreadsOnTimelineUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateInput_1.ThreadsOnTimelineUpdateInput)
], UpdateThreadsOnTimelineArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], UpdateThreadsOnTimelineArgs.prototype, "where", void 0);
UpdateThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateThreadsOnTimelineArgs);
exports.UpdateThreadsOnTimelineArgs = UpdateThreadsOnTimelineArgs;
