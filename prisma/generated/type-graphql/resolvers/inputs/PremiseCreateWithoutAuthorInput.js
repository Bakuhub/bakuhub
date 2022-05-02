"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutPremiseInput");
const SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput");
const TagsOnPremisesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateNestedManyWithoutPremiseInput");
const ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateNestedManyWithoutPremiseInput");
const VisionCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VisionCreateNestedManyWithoutPremiseInput");
const VotesOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateNestedManyWithoutPremiseInput");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let PremiseCreateWithoutAuthorInput = class PremiseCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutAuthorInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutAuthorInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutAuthorInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutAuthorInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateNestedManyWithoutPremiseInput_1.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutAuthorInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutAuthorInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutAuthorInput.prototype, "subscriptionsOnPremises", void 0);
PremiseCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateWithoutAuthorInput", {
        isAbstract: true
    })
], PremiseCreateWithoutAuthorInput);
exports.PremiseCreateWithoutAuthorInput = PremiseCreateWithoutAuthorInput;
