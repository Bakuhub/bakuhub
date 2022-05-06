"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateWithoutReferenceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateNestedOneWithoutVisionInput_1 = require("../inputs/MergeRequestCreateNestedOneWithoutVisionInput");
const PremiseCreateNestedOneWithoutVisionInput_1 = require("../inputs/PremiseCreateNestedOneWithoutVisionInput");
const ReactionOnVisionsCreateNestedManyWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsCreateNestedManyWithoutVisionInput");
const ThreadsOnVisionCreateNestedManyWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionCreateNestedManyWithoutVisionInput");
const UserCreateNestedOneWithoutVisionsInput_1 = require("../inputs/UserCreateNestedOneWithoutVisionsInput");
const VisionCreateNestedManyWithoutPrevVisionInput_1 = require("../inputs/VisionCreateNestedManyWithoutPrevVisionInput");
const VisionCreateNestedOneWithoutNextVisionsInput_1 = require("../inputs/VisionCreateNestedOneWithoutNextVisionsInput");
const VotesOnVisionCreateNestedManyWithoutVisionInput_1 = require("../inputs/VotesOnVisionCreateNestedManyWithoutVisionInput");
let VisionCreateWithoutReferenceInput = class VisionCreateWithoutReferenceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutReferenceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutReferenceInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionCreateWithoutReferenceInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutReferenceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionCreateWithoutReferenceInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionCreateWithoutReferenceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVisionsInput_1.UserCreateNestedOneWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVisionsInput_1.UserCreateNestedOneWithoutVisionsInput)
], VisionCreateWithoutReferenceInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutVisionInput_1.PremiseCreateNestedOneWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutVisionInput_1.PremiseCreateNestedOneWithoutVisionInput)
], VisionCreateWithoutReferenceInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionCreateWithoutReferenceInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionCreateWithoutReferenceInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutNextVisionsInput_1.VisionCreateNestedOneWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutNextVisionsInput_1.VisionCreateNestedOneWithoutNextVisionsInput)
], VisionCreateWithoutReferenceInput.prototype, "prevVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPrevVisionInput_1.VisionCreateNestedManyWithoutPrevVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutPrevVisionInput_1.VisionCreateNestedManyWithoutPrevVisionInput)
], VisionCreateWithoutReferenceInput.prototype, "nextVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateNestedManyWithoutVisionInput_1.ThreadsOnVisionCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateNestedManyWithoutVisionInput_1.ThreadsOnVisionCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutReferenceInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutVisionInput_1.MergeRequestCreateNestedOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateNestedOneWithoutVisionInput_1.MergeRequestCreateNestedOneWithoutVisionInput)
], VisionCreateWithoutReferenceInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateNestedManyWithoutVisionInput_1.ReactionOnVisionsCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateNestedManyWithoutVisionInput_1.ReactionOnVisionsCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutReferenceInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateNestedManyWithoutVisionInput_1.VotesOnVisionCreateNestedManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateNestedManyWithoutVisionInput_1.VotesOnVisionCreateNestedManyWithoutVisionInput)
], VisionCreateWithoutReferenceInput.prototype, "votesOnVision", void 0);
VisionCreateWithoutReferenceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateWithoutReferenceInput", {
        isAbstract: true
    })
], VisionCreateWithoutReferenceInput);
exports.VisionCreateWithoutReferenceInput = VisionCreateWithoutReferenceInput;
