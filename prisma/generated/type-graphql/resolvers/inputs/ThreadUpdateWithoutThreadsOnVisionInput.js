"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ReactionOnThreadsUpdateManyWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsUpdateManyWithoutThreadInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadUpdateManyWithoutParentThreadInput_1 = require("../inputs/ThreadUpdateManyWithoutParentThreadInput");
const ThreadUpdateOneWithoutChildThreadsInput_1 = require("../inputs/ThreadUpdateOneWithoutChildThreadsInput");
const ThreadsOnMergeRequestUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateOneWithoutThreadInput");
const ThreadsOnPremiseUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseUpdateOneWithoutThreadInput");
const ThreadsOnTimelineUpdateOneWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineUpdateOneWithoutThreadInput");
const UserUpdateOneWithoutThreadsInput_1 = require("../inputs/UserUpdateOneWithoutThreadsInput");
const VotesOnThreadUpdateManyWithoutThreadInput_1 = require("../inputs/VotesOnThreadUpdateManyWithoutThreadInput");
let ThreadUpdateWithoutThreadsOnVisionInput = class ThreadUpdateWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutThreadsInput_1.UserUpdateOneWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutThreadsInput_1.UserUpdateOneWithoutThreadsInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneWithoutChildThreadsInput_1.ThreadUpdateOneWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneWithoutChildThreadsInput_1.ThreadUpdateOneWithoutChildThreadsInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "parentThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateManyWithoutParentThreadInput_1.ThreadUpdateManyWithoutParentThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateManyWithoutParentThreadInput_1.ThreadUpdateManyWithoutParentThreadInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "childThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateOneWithoutThreadInput_1.ThreadsOnPremiseUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateOneWithoutThreadInput_1.ThreadsOnPremiseUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateOneWithoutThreadInput_1.ThreadsOnTimelineUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateOneWithoutThreadInput_1.ThreadsOnTimelineUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateOneWithoutThreadInput_1.ThreadsOnMergeRequestUpdateOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateOneWithoutThreadInput_1.ThreadsOnMergeRequestUpdateOneWithoutThreadInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "threadsOnMergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyWithoutThreadInput_1.ReactionOnThreadsUpdateManyWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateManyWithoutThreadInput_1.ReactionOnThreadsUpdateManyWithoutThreadInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "ReactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyWithoutThreadInput_1.VotesOnThreadUpdateManyWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyWithoutThreadInput_1.VotesOnThreadUpdateManyWithoutThreadInput)
], ThreadUpdateWithoutThreadsOnVisionInput.prototype, "votesOnThread", void 0);
ThreadUpdateWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], ThreadUpdateWithoutThreadsOnVisionInput);
exports.ThreadUpdateWithoutThreadsOnVisionInput = ThreadUpdateWithoutThreadsOnVisionInput;
