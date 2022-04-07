"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput_1 = require("../inputs/ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput");
let ThreadsOnTimelineWhereUniqueInput = class ThreadsOnTimelineWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineWhereUniqueInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput_1.ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput_1.ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput)
], ThreadsOnTimelineWhereUniqueInput.prototype, "threadId_timelineId", void 0);
ThreadsOnTimelineWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineWhereUniqueInput", {
        isAbstract: true
    })
], ThreadsOnTimelineWhereUniqueInput);
exports.ThreadsOnTimelineWhereUniqueInput = ThreadsOnTimelineWhereUniqueInput;
