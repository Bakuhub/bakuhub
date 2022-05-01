"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPremiseStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumPremiseStatusFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubscriptionsOnPremisesUpdateManyWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateManyWithoutPremiseInput");
const TagsOnPremisesUpdateManyWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesUpdateManyWithoutPremiseInput");
const ThreadsOnPremiseUpdateManyWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseUpdateManyWithoutPremiseInput");
const UserUpdateOneWithoutPremisesInput_1 = require("../inputs/UserUpdateOneWithoutPremisesInput");
const VisionUpdateManyWithoutPremiseInput_1 = require("../inputs/VisionUpdateManyWithoutPremiseInput");
const VotesOnPremiseUpdateManyWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseUpdateManyWithoutPremiseInput");
let PremiseUpdateWithoutPremisesOnTimelinesInput = class PremiseUpdateWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPremiseStatusFieldUpdateOperationsInput_1.EnumPremiseStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPremiseStatusFieldUpdateOperationsInput_1.EnumPremiseStatusFieldUpdateOperationsInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutPremisesInput_1.UserUpdateOneWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutPremisesInput_1.UserUpdateOneWithoutPremisesInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutPremiseInput_1.VisionUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutPremiseInput_1.VisionUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutPremiseInput_1.TagsOnPremisesUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateManyWithoutPremiseInput_1.TagsOnPremisesUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyWithoutPremiseInput_1.ThreadsOnPremiseUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateManyWithoutPremiseInput_1.ThreadsOnPremiseUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyWithoutPremiseInput_1.VotesOnPremiseUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateManyWithoutPremiseInput_1.VotesOnPremiseUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateManyWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutPremisesOnTimelinesInput.prototype, "SubscriptionsOnPremises", void 0);
PremiseUpdateWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], PremiseUpdateWithoutPremisesOnTimelinesInput);
exports.PremiseUpdateWithoutPremisesOnTimelinesInput = PremiseUpdateWithoutPremisesOnTimelinesInput;
