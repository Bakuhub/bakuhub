"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MergeRequestUpdateOneWithoutVisionInput_1 = require("../inputs/MergeRequestUpdateOneWithoutVisionInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ReactionOnVisionsUpdateManyWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsUpdateManyWithoutVisionInput");
const ReferenceUpdateOneWithoutVisionInput_1 = require("../inputs/ReferenceUpdateOneWithoutVisionInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadsOnVisionUpdateManyWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput");
const UserUpdateOneWithoutVisionsInput_1 = require("../inputs/UserUpdateOneWithoutVisionsInput");
const VisionUpdateManyWithoutPrevVisionInput_1 = require("../inputs/VisionUpdateManyWithoutPrevVisionInput");
const VisionUpdateOneWithoutNextVisionsInput_1 = require("../inputs/VisionUpdateOneWithoutNextVisionsInput");
const VotesOnVisionUpdateManyWithoutVisionInput_1 = require("../inputs/VotesOnVisionUpdateManyWithoutVisionInput");
let VisionUpdateWithoutPremiseInput = class VisionUpdateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionUpdateWithoutPremiseInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionUpdateWithoutPremiseInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutPremiseInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VisionUpdateWithoutPremiseInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutPremiseInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutPremiseInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateOneWithoutVisionInput_1.ReferenceUpdateOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateOneWithoutVisionInput_1.ReferenceUpdateOneWithoutVisionInput)
], VisionUpdateWithoutPremiseInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutVisionsInput_1.UserUpdateOneWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutVisionsInput_1.UserUpdateOneWithoutVisionsInput)
], VisionUpdateWithoutPremiseInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VisionUpdateWithoutPremiseInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], VisionUpdateWithoutPremiseInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneWithoutNextVisionsInput_1.VisionUpdateOneWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneWithoutNextVisionsInput_1.VisionUpdateOneWithoutNextVisionsInput)
], VisionUpdateWithoutPremiseInput.prototype, "prevVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutPrevVisionInput_1.VisionUpdateManyWithoutPrevVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutPrevVisionInput_1.VisionUpdateManyWithoutPrevVisionInput)
], VisionUpdateWithoutPremiseInput.prototype, "nextVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyWithoutVisionInput_1.ThreadsOnVisionUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateManyWithoutVisionInput_1.ThreadsOnVisionUpdateManyWithoutVisionInput)
], VisionUpdateWithoutPremiseInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateOneWithoutVisionInput_1.MergeRequestUpdateOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateOneWithoutVisionInput_1.MergeRequestUpdateOneWithoutVisionInput)
], VisionUpdateWithoutPremiseInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutVisionInput_1.ReactionOnVisionsUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyWithoutVisionInput_1.ReactionOnVisionsUpdateManyWithoutVisionInput)
], VisionUpdateWithoutPremiseInput.prototype, "ReactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateManyWithoutVisionInput_1.VotesOnVisionUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateManyWithoutVisionInput_1.VotesOnVisionUpdateManyWithoutVisionInput)
], VisionUpdateWithoutPremiseInput.prototype, "votesOnVision", void 0);
VisionUpdateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateWithoutPremiseInput", {
        isAbstract: true
    })
], VisionUpdateWithoutPremiseInput);
exports.VisionUpdateWithoutPremiseInput = VisionUpdateWithoutPremiseInput;
