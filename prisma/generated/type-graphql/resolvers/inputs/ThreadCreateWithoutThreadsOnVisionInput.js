"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateNestedManyWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsCreateNestedManyWithoutThreadInput");
const ThreadCreateNestedManyWithoutParentThreadInput_1 = require("../inputs/ThreadCreateNestedManyWithoutParentThreadInput");
const ThreadCreateNestedOneWithoutChildThreadsInput_1 = require("../inputs/ThreadCreateNestedOneWithoutChildThreadsInput");
const ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput");
const ThreadsOnPremiseCreateNestedOneWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseCreateNestedOneWithoutThreadInput");
const ThreadsOnTimelineCreateNestedOneWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineCreateNestedOneWithoutThreadInput");
const UserCreateNestedOneWithoutThreadsInput_1 = require("../inputs/UserCreateNestedOneWithoutThreadsInput");
const VotesOnThreadCreateNestedManyWithoutThreadInput_1 = require("../inputs/VotesOnThreadCreateNestedManyWithoutThreadInput");
let ThreadCreateWithoutThreadsOnVisionInput = class ThreadCreateWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutThreadsInput_1.UserCreateNestedOneWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutThreadsInput_1.UserCreateNestedOneWithoutThreadsInput)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutChildThreadsInput_1.ThreadCreateNestedOneWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutChildThreadsInput_1.ThreadCreateNestedOneWithoutChildThreadsInput)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "parentThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutParentThreadInput_1.ThreadCreateNestedManyWithoutParentThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedManyWithoutParentThreadInput_1.ThreadCreateNestedManyWithoutParentThreadInput)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "childThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedOneWithoutThreadInput_1.ThreadsOnPremiseCreateNestedOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateNestedOneWithoutThreadInput_1.ThreadsOnPremiseCreateNestedOneWithoutThreadInput)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedOneWithoutThreadInput_1.ThreadsOnTimelineCreateNestedOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateNestedOneWithoutThreadInput_1.ThreadsOnTimelineCreateNestedOneWithoutThreadInput)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput_1.ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput_1.ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "threadsOnMergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateNestedManyWithoutThreadInput_1.ReactionOnThreadsCreateNestedManyWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateNestedManyWithoutThreadInput_1.ReactionOnThreadsCreateNestedManyWithoutThreadInput)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "ReactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateNestedManyWithoutThreadInput_1.VotesOnThreadCreateNestedManyWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateNestedManyWithoutThreadInput_1.VotesOnThreadCreateNestedManyWithoutThreadInput)
], ThreadCreateWithoutThreadsOnVisionInput.prototype, "votesOnThread", void 0);
ThreadCreateWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], ThreadCreateWithoutThreadsOnVisionInput);
exports.ThreadCreateWithoutThreadsOnVisionInput = ThreadCreateWithoutThreadsOnVisionInput;
