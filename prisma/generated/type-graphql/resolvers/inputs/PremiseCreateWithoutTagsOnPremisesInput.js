"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutPremiseInput");
const SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput");
const ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateNestedManyWithoutPremiseInput");
const UserCreateNestedOneWithoutPremisesInput_1 = require("../inputs/UserCreateNestedOneWithoutPremisesInput");
const VisionCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VisionCreateNestedManyWithoutPremiseInput");
const VotesOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateNestedManyWithoutPremiseInput");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let PremiseCreateWithoutTagsOnPremisesInput = class PremiseCreateWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutTagsOnPremisesInput.prototype, "subscriptionsOnPremises", void 0);
PremiseCreateWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], PremiseCreateWithoutTagsOnPremisesInput);
exports.PremiseCreateWithoutTagsOnPremisesInput = PremiseCreateWithoutTagsOnPremisesInput;
