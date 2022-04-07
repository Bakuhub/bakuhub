"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateWithoutChildThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateNestedManyWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsCreateNestedManyWithoutThreadInput");
const ThreadCreateNestedOneWithoutChildThreadsInput_1 = require("../inputs/ThreadCreateNestedOneWithoutChildThreadsInput");
const ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput");
const ThreadsOnPremiseCreateNestedOneWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseCreateNestedOneWithoutThreadInput");
const ThreadsOnTimelineCreateNestedOneWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineCreateNestedOneWithoutThreadInput");
const ThreadsOnVisionCreateNestedOneWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionCreateNestedOneWithoutThreadInput");
const UserCreateNestedOneWithoutThreadsInput_1 = require("../inputs/UserCreateNestedOneWithoutThreadsInput");
let ThreadCreateWithoutChildThreadsInput = class ThreadCreateWithoutChildThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateWithoutChildThreadsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateWithoutChildThreadsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadCreateWithoutChildThreadsInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateWithoutChildThreadsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadCreateWithoutChildThreadsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateWithoutChildThreadsInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutThreadsInput_1.UserCreateNestedOneWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutThreadsInput_1.UserCreateNestedOneWithoutThreadsInput)
], ThreadCreateWithoutChildThreadsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutChildThreadsInput_1.ThreadCreateNestedOneWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutChildThreadsInput_1.ThreadCreateNestedOneWithoutChildThreadsInput)
], ThreadCreateWithoutChildThreadsInput.prototype, "parentThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedOneWithoutThreadInput_1.ThreadsOnPremiseCreateNestedOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateNestedOneWithoutThreadInput_1.ThreadsOnPremiseCreateNestedOneWithoutThreadInput)
], ThreadCreateWithoutChildThreadsInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedOneWithoutThreadInput_1.ThreadsOnTimelineCreateNestedOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateNestedOneWithoutThreadInput_1.ThreadsOnTimelineCreateNestedOneWithoutThreadInput)
], ThreadCreateWithoutChildThreadsInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateNestedOneWithoutThreadInput_1.ThreadsOnVisionCreateNestedOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateNestedOneWithoutThreadInput_1.ThreadsOnVisionCreateNestedOneWithoutThreadInput)
], ThreadCreateWithoutChildThreadsInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput_1.ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput_1.ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput)
], ThreadCreateWithoutChildThreadsInput.prototype, "threadsOnMergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateNestedManyWithoutThreadInput_1.ReactionOnThreadsCreateNestedManyWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateNestedManyWithoutThreadInput_1.ReactionOnThreadsCreateNestedManyWithoutThreadInput)
], ThreadCreateWithoutChildThreadsInput.prototype, "ReactionOnThreads", void 0);
ThreadCreateWithoutChildThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateWithoutChildThreadsInput", {
        isAbstract: true
    })
], ThreadCreateWithoutChildThreadsInput);
exports.ThreadCreateWithoutChildThreadsInput = ThreadCreateWithoutChildThreadsInput;
