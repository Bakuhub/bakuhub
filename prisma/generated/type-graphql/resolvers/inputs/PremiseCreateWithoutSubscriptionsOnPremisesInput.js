"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateWithoutSubscriptionsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutPremiseInput");
const TagsOnPremisesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateNestedManyWithoutPremiseInput");
const ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateNestedManyWithoutPremiseInput");
const UserCreateNestedOneWithoutPremisesInput_1 = require("../inputs/UserCreateNestedOneWithoutPremisesInput");
const VisionCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VisionCreateNestedManyWithoutPremiseInput");
const VotesOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateNestedManyWithoutPremiseInput");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let PremiseCreateWithoutSubscriptionsOnPremisesInput = class PremiseCreateWithoutSubscriptionsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutSubscriptionsOnPremisesInput.prototype, "votesOnPremise", void 0);
PremiseCreateWithoutSubscriptionsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateWithoutSubscriptionsOnPremisesInput", {
        isAbstract: true
    })
], PremiseCreateWithoutSubscriptionsOnPremisesInput);
exports.PremiseCreateWithoutSubscriptionsOnPremisesInput = PremiseCreateWithoutSubscriptionsOnPremisesInput;
