"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineWhereUniqueInput_1 = require("../../../inputs/ThreadsOnTimelineWhereUniqueInput");
let FindUniqueThreadsOnTimelineArgs = class FindUniqueThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], FindUniqueThreadsOnTimelineArgs.prototype, "where", void 0);
FindUniqueThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueThreadsOnTimelineArgs);
exports.FindUniqueThreadsOnTimelineArgs = FindUniqueThreadsOnTimelineArgs;
