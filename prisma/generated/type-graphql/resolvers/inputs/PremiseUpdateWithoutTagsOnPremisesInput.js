"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPremiseStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumPremiseStatusFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const PremisesOnTimelinesUpdateManyWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyWithoutPremiseInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadsOnPremiseUpdateManyWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseUpdateManyWithoutPremiseInput");
const UserUpdateOneWithoutPremisesInput_1 = require("../inputs/UserUpdateOneWithoutPremisesInput");
const VisionUpdateManyWithoutPremiseInput_1 = require("../inputs/VisionUpdateManyWithoutPremiseInput");
const VotesOnPremiseUpdateManyWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseUpdateManyWithoutPremiseInput");
let PremiseUpdateWithoutTagsOnPremisesInput = class PremiseUpdateWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPremiseStatusFieldUpdateOperationsInput_1.EnumPremiseStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPremiseStatusFieldUpdateOperationsInput_1.EnumPremiseStatusFieldUpdateOperationsInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutPremisesInput_1.UserUpdateOneWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutPremisesInput_1.UserUpdateOneWithoutPremisesInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutPremiseInput_1.VisionUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutPremiseInput_1.VisionUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutPremiseInput_1.PremisesOnTimelinesUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateManyWithoutPremiseInput_1.PremisesOnTimelinesUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyWithoutPremiseInput_1.ThreadsOnPremiseUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateManyWithoutPremiseInput_1.ThreadsOnPremiseUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyWithoutPremiseInput_1.VotesOnPremiseUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateManyWithoutPremiseInput_1.VotesOnPremiseUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutTagsOnPremisesInput.prototype, "votesOnPremise", void 0);
PremiseUpdateWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], PremiseUpdateWithoutTagsOnPremisesInput);
exports.PremiseUpdateWithoutTagsOnPremisesInput = PremiseUpdateWithoutTagsOnPremisesInput;
