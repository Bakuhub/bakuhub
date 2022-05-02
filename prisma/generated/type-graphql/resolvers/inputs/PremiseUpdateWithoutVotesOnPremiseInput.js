"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPremiseStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumPremiseStatusFieldUpdateOperationsInput");
const PremisesOnTimelinesUpdateManyWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyWithoutPremiseInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubscriptionsOnPremisesUpdateManyWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateManyWithoutPremiseInput");
const TagsOnPremisesUpdateManyWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesUpdateManyWithoutPremiseInput");
const ThreadsOnPremiseUpdateManyWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseUpdateManyWithoutPremiseInput");
const UserUpdateOneWithoutPremisesInput_1 = require("../inputs/UserUpdateOneWithoutPremisesInput");
const VisionUpdateManyWithoutPremiseInput_1 = require("../inputs/VisionUpdateManyWithoutPremiseInput");
let PremiseUpdateWithoutVotesOnPremiseInput = class PremiseUpdateWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPremiseStatusFieldUpdateOperationsInput_1.EnumPremiseStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPremiseStatusFieldUpdateOperationsInput_1.EnumPremiseStatusFieldUpdateOperationsInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutPremisesInput_1.UserUpdateOneWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutPremisesInput_1.UserUpdateOneWithoutPremisesInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutPremiseInput_1.VisionUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutPremiseInput_1.VisionUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutPremiseInput_1.PremisesOnTimelinesUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateManyWithoutPremiseInput_1.PremisesOnTimelinesUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutPremiseInput_1.TagsOnPremisesUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateManyWithoutPremiseInput_1.TagsOnPremisesUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyWithoutPremiseInput_1.ThreadsOnPremiseUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateManyWithoutPremiseInput_1.ThreadsOnPremiseUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateManyWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateManyWithoutPremiseInput)
], PremiseUpdateWithoutVotesOnPremiseInput.prototype, "SubscriptionsOnPremises", void 0);
PremiseUpdateWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], PremiseUpdateWithoutVotesOnPremiseInput);
exports.PremiseUpdateWithoutVotesOnPremiseInput = PremiseUpdateWithoutVotesOnPremiseInput;
