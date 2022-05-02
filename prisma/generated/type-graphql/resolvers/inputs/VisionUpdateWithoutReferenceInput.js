"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateWithoutReferenceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MergeRequestUpdateOneWithoutVisionInput_1 = require("../inputs/MergeRequestUpdateOneWithoutVisionInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutVisionInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutVisionInput");
const ReactionOnVisionsUpdateManyWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsUpdateManyWithoutVisionInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadsOnVisionUpdateManyWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput");
const UserUpdateOneWithoutVisionsInput_1 = require("../inputs/UserUpdateOneWithoutVisionsInput");
const VisionUpdateManyWithoutPrevVisionInput_1 = require("../inputs/VisionUpdateManyWithoutPrevVisionInput");
const VisionUpdateOneWithoutNextVisionsInput_1 = require("../inputs/VisionUpdateOneWithoutNextVisionsInput");
const VotesOnVisionUpdateManyWithoutVisionInput_1 = require("../inputs/VotesOnVisionUpdateManyWithoutVisionInput");
let VisionUpdateWithoutReferenceInput = class VisionUpdateWithoutReferenceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionUpdateWithoutReferenceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionUpdateWithoutReferenceInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutReferenceInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VisionUpdateWithoutReferenceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutReferenceInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutReferenceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutVisionsInput_1.UserUpdateOneWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutVisionsInput_1.UserUpdateOneWithoutVisionsInput)
], VisionUpdateWithoutReferenceInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVisionInput_1.PremiseUpdateOneRequiredWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutVisionInput_1.PremiseUpdateOneRequiredWithoutVisionInput)
], VisionUpdateWithoutReferenceInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VisionUpdateWithoutReferenceInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], VisionUpdateWithoutReferenceInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneWithoutNextVisionsInput_1.VisionUpdateOneWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneWithoutNextVisionsInput_1.VisionUpdateOneWithoutNextVisionsInput)
], VisionUpdateWithoutReferenceInput.prototype, "prevVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutPrevVisionInput_1.VisionUpdateManyWithoutPrevVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutPrevVisionInput_1.VisionUpdateManyWithoutPrevVisionInput)
], VisionUpdateWithoutReferenceInput.prototype, "nextVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyWithoutVisionInput_1.ThreadsOnVisionUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateManyWithoutVisionInput_1.ThreadsOnVisionUpdateManyWithoutVisionInput)
], VisionUpdateWithoutReferenceInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateOneWithoutVisionInput_1.MergeRequestUpdateOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateOneWithoutVisionInput_1.MergeRequestUpdateOneWithoutVisionInput)
], VisionUpdateWithoutReferenceInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutVisionInput_1.ReactionOnVisionsUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyWithoutVisionInput_1.ReactionOnVisionsUpdateManyWithoutVisionInput)
], VisionUpdateWithoutReferenceInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateManyWithoutVisionInput_1.VotesOnVisionUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateManyWithoutVisionInput_1.VotesOnVisionUpdateManyWithoutVisionInput)
], VisionUpdateWithoutReferenceInput.prototype, "votesOnVision", void 0);
VisionUpdateWithoutReferenceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateWithoutReferenceInput", {
        isAbstract: true
    })
], VisionUpdateWithoutReferenceInput);
exports.VisionUpdateWithoutReferenceInput = VisionUpdateWithoutReferenceInput;
