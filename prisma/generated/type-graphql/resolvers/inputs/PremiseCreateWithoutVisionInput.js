"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutPremiseInput");
const SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput");
const TagsOnPremisesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateNestedManyWithoutPremiseInput");
const ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateNestedManyWithoutPremiseInput");
const UserCreateNestedOneWithoutPremisesInput_1 = require("../inputs/UserCreateNestedOneWithoutPremisesInput");
const VotesOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateNestedManyWithoutPremiseInput");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let PremiseCreateWithoutVisionInput = class PremiseCreateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutVisionInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutVisionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutVisionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutVisionInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput)
], PremiseCreateWithoutVisionInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVisionInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVisionInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVisionInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVisionInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVisionInput.prototype, "subscriptionsOnPremises", void 0);
PremiseCreateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateWithoutVisionInput", {
        isAbstract: true
    })
], PremiseCreateWithoutVisionInput);
exports.PremiseCreateWithoutVisionInput = PremiseCreateWithoutVisionInput;
