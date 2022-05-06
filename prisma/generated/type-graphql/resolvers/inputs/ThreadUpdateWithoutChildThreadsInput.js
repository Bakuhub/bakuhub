"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateWithoutChildThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ReactionOnThreadsUpdateManyWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsUpdateManyWithoutThreadInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadUpdateOneWithoutChildThreadsInput_1 = require("../inputs/ThreadUpdateOneWithoutChildThreadsInput");
const ThreadsOnMergeRequestUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateOneWithoutThreadInput");
const ThreadsOnPremiseUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseUpdateOneWithoutThreadInput");
const ThreadsOnTimelineUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineUpdateOneWithoutThreadInput");
const ThreadsOnVisionUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionUpdateOneWithoutThreadInput");
const UserUpdateOneWithoutThreadsInput_1 = require("../inputs/UserUpdateOneWithoutThreadsInput");
const VotesOnThreadUpdateManyWithoutThreadInput_1 = require("../inputs/VotesOnThreadUpdateManyWithoutThreadInput");
let ThreadUpdateWithoutChildThreadsInput = class ThreadUpdateWithoutChildThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutThreadsInput_1.UserUpdateOneWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutThreadsInput_1.UserUpdateOneWithoutThreadsInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneWithoutChildThreadsInput_1.ThreadUpdateOneWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneWithoutChildThreadsInput_1.ThreadUpdateOneWithoutChildThreadsInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "parentThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateOneWithoutThreadInput_1.ThreadsOnPremiseUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateOneWithoutThreadInput_1.ThreadsOnPremiseUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateOneWithoutThreadInput_1.ThreadsOnTimelineUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateOneWithoutThreadInput_1.ThreadsOnTimelineUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateOneWithoutThreadInput_1.ThreadsOnVisionUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateOneWithoutThreadInput_1.ThreadsOnVisionUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateOneWithoutThreadInput_1.ThreadsOnMergeRequestUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateOneWithoutThreadInput_1.ThreadsOnMergeRequestUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "threadsOnMergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyWithoutThreadInput_1.ReactionOnThreadsUpdateManyWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateManyWithoutThreadInput_1.ReactionOnThreadsUpdateManyWithoutThreadInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "reactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyWithoutThreadInput_1.VotesOnThreadUpdateManyWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyWithoutThreadInput_1.VotesOnThreadUpdateManyWithoutThreadInput)
], ThreadUpdateWithoutChildThreadsInput.prototype, "votesOnThread", void 0);
ThreadUpdateWithoutChildThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateWithoutChildThreadsInput", {
        isAbstract: true
    })
], ThreadUpdateWithoutChildThreadsInput);
exports.ThreadUpdateWithoutChildThreadsInput = ThreadUpdateWithoutChildThreadsInput;
