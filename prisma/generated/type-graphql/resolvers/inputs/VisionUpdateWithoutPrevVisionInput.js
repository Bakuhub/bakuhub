"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateWithoutPrevVisionInput = void 0;
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
const ThreadsOnVisionUpdateManyWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput");
const UserUpdateOneWithoutVisionsInput_1 = require("../inputs/UserUpdateOneWithoutVisionsInput");
const VisionUpdateManyWithoutPrevVisionInput_1 = require("../inputs/VisionUpdateManyWithoutPrevVisionInput");
let VisionUpdateWithoutPrevVisionInput = class VisionUpdateWithoutPrevVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateOneWithoutVisionInput_1.ReferenceUpdateOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateOneWithoutVisionInput_1.ReferenceUpdateOneWithoutVisionInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutVisionsInput_1.UserUpdateOneWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutVisionsInput_1.UserUpdateOneWithoutVisionsInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVisionInput_1.PremiseUpdateOneRequiredWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutVisionInput_1.PremiseUpdateOneRequiredWithoutVisionInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutPrevVisionInput_1.VisionUpdateManyWithoutPrevVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutPrevVisionInput_1.VisionUpdateManyWithoutPrevVisionInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "nextVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyWithoutVisionInput_1.ThreadsOnVisionUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateManyWithoutVisionInput_1.ThreadsOnVisionUpdateManyWithoutVisionInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateOneWithoutVisionInput_1.MergeRequestUpdateOneWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateOneWithoutVisionInput_1.MergeRequestUpdateOneWithoutVisionInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutVisionInput_1.ReactionOnVisionsUpdateManyWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyWithoutVisionInput_1.ReactionOnVisionsUpdateManyWithoutVisionInput)
], VisionUpdateWithoutPrevVisionInput.prototype, "ReactionOnVisions", void 0);
VisionUpdateWithoutPrevVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateWithoutPrevVisionInput", {
        isAbstract: true
    })
], VisionUpdateWithoutPrevVisionInput);
exports.VisionUpdateWithoutPrevVisionInput = VisionUpdateWithoutPrevVisionInput;
