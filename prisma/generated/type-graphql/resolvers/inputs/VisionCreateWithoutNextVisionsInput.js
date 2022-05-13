"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateWithoutNextVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateNestedOneWithoutVisionInput_1 = require("../inputs/MergeRequestCreateNestedOneWithoutVisionInput");
const PremiseCreateNestedOneWithoutVisionInput_1 = require("../inputs/PremiseCreateNestedOneWithoutVisionInput");
const ReactionOnVisionsCreateNestedManyWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsCreateNestedManyWithoutVisionInput");
const ReferenceCreateNestedOneWithoutVisionInput_1 = require("../inputs/ReferenceCreateNestedOneWithoutVisionInput");
const TagsOnVisionsCreateNestedManyWithoutVisionInput_1 = require("../inputs/TagsOnVisionsCreateNestedManyWithoutVisionInput");
const ThreadsOnVisionCreateNestedManyWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionCreateNestedManyWithoutVisionInput");
const UserCreateNestedOneWithoutVisionsInput_1 = require("../inputs/UserCreateNestedOneWithoutVisionsInput");
const VisionCreateNestedOneWithoutNextVisionsInput_1 = require("../inputs/VisionCreateNestedOneWithoutNextVisionsInput");
const VisionViewsHistoryCreateNestedManyWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryCreateNestedManyWithoutVisionInput");
const VotesOnVisionCreateNestedManyWithoutVisionInput_1 = require("../inputs/VotesOnVisionCreateNestedManyWithoutVisionInput");
let VisionCreateWithoutNextVisionsInput = class VisionCreateWithoutNextVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutNextVisionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutNextVisionsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionCreateWithoutNextVisionsInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutNextVisionsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionCreateWithoutNextVisionsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionCreateWithoutNextVisionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateNestedOneWithoutVisionInput_1.ReferenceCreateNestedOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCreateNestedOneWithoutVisionInput_1.ReferenceCreateNestedOneWithoutVisionInput)
], VisionCreateWithoutNextVisionsInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVisionsInput_1.UserCreateNestedOneWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVisionsInput_1.UserCreateNestedOneWithoutVisionsInput)
], VisionCreateWithoutNextVisionsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutVisionInput_1.PremiseCreateNestedOneWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutVisionInput_1.PremiseCreateNestedOneWithoutVisionInput)
], VisionCreateWithoutNextVisionsInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutNextVisionsInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionCreateWithoutNextVisionsInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutNextVisionsInput_1.VisionCreateNestedOneWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutNextVisionsInput_1.VisionCreateNestedOneWithoutNextVisionsInput)
], VisionCreateWithoutNextVisionsInput.prototype, "prevVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateNestedManyWithoutVisionInput_1.ThreadsOnVisionCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateNestedManyWithoutVisionInput_1.ThreadsOnVisionCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutNextVisionsInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutVisionInput_1.MergeRequestCreateNestedOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateNestedOneWithoutVisionInput_1.MergeRequestCreateNestedOneWithoutVisionInput)
], VisionCreateWithoutNextVisionsInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateNestedManyWithoutVisionInput_1.ReactionOnVisionsCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateNestedManyWithoutVisionInput_1.ReactionOnVisionsCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutNextVisionsInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateNestedManyWithoutVisionInput_1.VotesOnVisionCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateNestedManyWithoutVisionInput_1.VotesOnVisionCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutNextVisionsInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateNestedManyWithoutVisionInput_1.TagsOnVisionsCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateNestedManyWithoutVisionInput_1.TagsOnVisionsCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutNextVisionsInput.prototype, "tagsOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateNestedManyWithoutVisionInput_1.VisionViewsHistoryCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateNestedManyWithoutVisionInput_1.VisionViewsHistoryCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutNextVisionsInput.prototype, "visionViewsHistory", void 0);
VisionCreateWithoutNextVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateWithoutNextVisionsInput", {
        isAbstract: true
    })
], VisionCreateWithoutNextVisionsInput);
exports.VisionCreateWithoutNextVisionsInput = VisionCreateWithoutNextVisionsInput;
