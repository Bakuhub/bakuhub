"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutPremiseInput");
const SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput");
const TagsOnPremisesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateNestedManyWithoutPremiseInput");
const ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateNestedManyWithoutPremiseInput");
const UserCreateNestedOneWithoutPremisesInput_1 = require("../inputs/UserCreateNestedOneWithoutPremisesInput");
const VisionCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VisionCreateNestedManyWithoutPremiseInput");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let PremiseCreateWithoutVotesOnPremiseInput = class PremiseCreateWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutVotesOnPremiseInput.prototype, "subscriptionsOnPremises", void 0);
PremiseCreateWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], PremiseCreateWithoutVotesOnPremiseInput);
exports.PremiseCreateWithoutVotesOnPremiseInput = PremiseCreateWithoutVotesOnPremiseInput;
