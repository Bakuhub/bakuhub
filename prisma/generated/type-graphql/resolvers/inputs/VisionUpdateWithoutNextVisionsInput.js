"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateWithoutNextVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MergeRequestUpdateOneWithoutVisionInput_1 = require("../inputs/MergeRequestUpdateOneWithoutVisionInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutVisionInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutVisionInput");
const ReactionOnVisionsUpdateManyWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsUpdateManyWithoutVisionInput");
const ReferenceUpdateOneWithoutVisionInput_1 = require("../inputs/ReferenceUpdateOneWithoutVisionInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TagsOnVisionsUpdateManyWithoutVisionInput_1 = require("../inputs/TagsOnVisionsUpdateManyWithoutVisionInput");
const ThreadsOnVisionUpdateManyWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput");
const UserUpdateOneWithoutVisionsInput_1 = require("../inputs/UserUpdateOneWithoutVisionsInput");
const VisionUpdateOneWithoutNextVisionsInput_1 = require("../inputs/VisionUpdateOneWithoutNextVisionsInput");
const VisionViewsHistoryUpdateManyWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryUpdateManyWithoutVisionInput");
const VotesOnVisionUpdateManyWithoutVisionInput_1 = require("../inputs/VotesOnVisionUpdateManyWithoutVisionInput");
let VisionUpdateWithoutNextVisionsInput = class VisionUpdateWithoutNextVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateOneWithoutVisionInput_1.ReferenceUpdateOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateOneWithoutVisionInput_1.ReferenceUpdateOneWithoutVisionInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutVisionsInput_1.UserUpdateOneWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutVisionsInput_1.UserUpdateOneWithoutVisionsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVisionInput_1.PremiseUpdateOneRequiredWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutVisionInput_1.PremiseUpdateOneRequiredWithoutVisionInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneWithoutNextVisionsInput_1.VisionUpdateOneWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneWithoutNextVisionsInput_1.VisionUpdateOneWithoutNextVisionsInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "prevVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyWithoutVisionInput_1.ThreadsOnVisionUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateManyWithoutVisionInput_1.ThreadsOnVisionUpdateManyWithoutVisionInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateOneWithoutVisionInput_1.MergeRequestUpdateOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateOneWithoutVisionInput_1.MergeRequestUpdateOneWithoutVisionInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutVisionInput_1.ReactionOnVisionsUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyWithoutVisionInput_1.ReactionOnVisionsUpdateManyWithoutVisionInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateManyWithoutVisionInput_1.VotesOnVisionUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateManyWithoutVisionInput_1.VotesOnVisionUpdateManyWithoutVisionInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateManyWithoutVisionInput_1.TagsOnVisionsUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateManyWithoutVisionInput_1.TagsOnVisionsUpdateManyWithoutVisionInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "tagsOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateManyWithoutVisionInput_1.VisionViewsHistoryUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateManyWithoutVisionInput_1.VisionViewsHistoryUpdateManyWithoutVisionInput)
], VisionUpdateWithoutNextVisionsInput.prototype, "visionViewsHistory", void 0);
VisionUpdateWithoutNextVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateWithoutNextVisionsInput", {
        isAbstract: true
    })
], VisionUpdateWithoutNextVisionsInput);
exports.VisionUpdateWithoutNextVisionsInput = VisionUpdateWithoutNextVisionsInput;
