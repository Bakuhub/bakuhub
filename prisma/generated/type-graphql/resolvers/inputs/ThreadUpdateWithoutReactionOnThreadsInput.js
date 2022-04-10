"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadUpdateManyWithoutParentThreadInput_1 = require("../inputs/ThreadUpdateManyWithoutParentThreadInput");
const ThreadUpdateOneWithoutChildThreadsInput_1 = require("../inputs/ThreadUpdateOneWithoutChildThreadsInput");
const ThreadsOnMergeRequestUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateOneWithoutThreadInput");
const ThreadsOnPremiseUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseUpdateOneWithoutThreadInput");
const ThreadsOnTimelineUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineUpdateOneWithoutThreadInput");
const ThreadsOnVisionUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionUpdateOneWithoutThreadInput");
const UserUpdateOneWithoutThreadsInput_1 = require("../inputs/UserUpdateOneWithoutThreadsInput");
const VotesOnThreadUpdateManyWithoutThreadInput_1 = require("../inputs/VotesOnThreadUpdateManyWithoutThreadInput");
let ThreadUpdateWithoutReactionOnThreadsInput = class ThreadUpdateWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutThreadsInput_1.UserUpdateOneWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutThreadsInput_1.UserUpdateOneWithoutThreadsInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneWithoutChildThreadsInput_1.ThreadUpdateOneWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneWithoutChildThreadsInput_1.ThreadUpdateOneWithoutChildThreadsInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "parentThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateManyWithoutParentThreadInput_1.ThreadUpdateManyWithoutParentThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateManyWithoutParentThreadInput_1.ThreadUpdateManyWithoutParentThreadInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "childThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateOneWithoutThreadInput_1.ThreadsOnPremiseUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateOneWithoutThreadInput_1.ThreadsOnPremiseUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateOneWithoutThreadInput_1.ThreadsOnTimelineUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateOneWithoutThreadInput_1.ThreadsOnTimelineUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateOneWithoutThreadInput_1.ThreadsOnVisionUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateOneWithoutThreadInput_1.ThreadsOnVisionUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateOneWithoutThreadInput_1.ThreadsOnMergeRequestUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateOneWithoutThreadInput_1.ThreadsOnMergeRequestUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "threadsOnMergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyWithoutThreadInput_1.VotesOnThreadUpdateManyWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyWithoutThreadInput_1.VotesOnThreadUpdateManyWithoutThreadInput)
], ThreadUpdateWithoutReactionOnThreadsInput.prototype, "votesOnThread", void 0);
ThreadUpdateWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], ThreadUpdateWithoutReactionOnThreadsInput);
exports.ThreadUpdateWithoutReactionOnThreadsInput = ThreadUpdateWithoutReactionOnThreadsInput;
