"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineWhereUniqueInput_1 = require("../../../inputs/ThreadsOnTimelineWhereUniqueInput");
let DeleteThreadsOnTimelineArgs = class DeleteThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], DeleteThreadsOnTimelineArgs.prototype, "where", void 0);
DeleteThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteThreadsOnTimelineArgs);
exports.DeleteThreadsOnTimelineArgs = DeleteThreadsOnTimelineArgs;
