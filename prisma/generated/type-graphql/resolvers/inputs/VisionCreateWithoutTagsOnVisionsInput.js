"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateNestedOneWithoutVisionInput_1 = require("../inputs/MergeRequestCreateNestedOneWithoutVisionInput");
const PremiseCreateNestedOneWithoutVisionInput_1 = require("../inputs/PremiseCreateNestedOneWithoutVisionInput");
const ReactionOnVisionsCreateNestedManyWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsCreateNestedManyWithoutVisionInput");
const ReferenceCreateNestedOneWithoutVisionInput_1 = require("../inputs/ReferenceCreateNestedOneWithoutVisionInput");
const ThreadsOnVisionCreateNestedManyWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionCreateNestedManyWithoutVisionInput");
const UserCreateNestedOneWithoutVisionsInput_1 = require("../inputs/UserCreateNestedOneWithoutVisionsInput");
const VisionCreateNestedManyWithoutPrevVisionInput_1 = require("../inputs/VisionCreateNestedManyWithoutPrevVisionInput");
const VisionCreateNestedOneWithoutNextVisionsInput_1 = require("../inputs/VisionCreateNestedOneWithoutNextVisionsInput");
const VotesOnVisionCreateNestedManyWithoutVisionInput_1 = require("../inputs/VotesOnVisionCreateNestedManyWithoutVisionInput");
let VisionCreateWithoutTagsOnVisionsInput = class VisionCreateWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateNestedOneWithoutVisionInput_1.ReferenceCreateNestedOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCreateNestedOneWithoutVisionInput_1.ReferenceCreateNestedOneWithoutVisionInput)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVisionsInput_1.UserCreateNestedOneWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVisionsInput_1.UserCreateNestedOneWithoutVisionsInput)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutVisionInput_1.PremiseCreateNestedOneWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutVisionInput_1.PremiseCreateNestedOneWithoutVisionInput)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutNextVisionsInput_1.VisionCreateNestedOneWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutNextVisionsInput_1.VisionCreateNestedOneWithoutNextVisionsInput)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "prevVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPrevVisionInput_1.VisionCreateNestedManyWithoutPrevVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutPrevVisionInput_1.VisionCreateNestedManyWithoutPrevVisionInput)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "nextVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateNestedManyWithoutVisionInput_1.ThreadsOnVisionCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateNestedManyWithoutVisionInput_1.ThreadsOnVisionCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutVisionInput_1.MergeRequestCreateNestedOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateNestedOneWithoutVisionInput_1.MergeRequestCreateNestedOneWithoutVisionInput)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateNestedManyWithoutVisionInput_1.ReactionOnVisionsCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateNestedManyWithoutVisionInput_1.ReactionOnVisionsCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateNestedManyWithoutVisionInput_1.VotesOnVisionCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateNestedManyWithoutVisionInput_1.VotesOnVisionCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutTagsOnVisionsInput.prototype, "votesOnVision", void 0);
VisionCreateWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], VisionCreateWithoutTagsOnVisionsInput);
exports.VisionCreateWithoutTagsOnVisionsInput = VisionCreateWithoutTagsOnVisionsInput;
