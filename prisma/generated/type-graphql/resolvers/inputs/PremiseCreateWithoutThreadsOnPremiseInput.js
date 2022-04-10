"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateWithoutThreadsOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutPremiseInput");
const TagsOnPremisesCreateNestedManyWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateNestedManyWithoutPremiseInput");
const UserCreateNestedOneWithoutPremisesInput_1 = require("../inputs/UserCreateNestedOneWithoutPremisesInput");
const VisionCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VisionCreateNestedManyWithoutPremiseInput");
const VotesOnPremiseCreateNestedManyWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateNestedManyWithoutPremiseInput");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let PremiseCreateWithoutThreadsOnPremiseInput = class PremiseCreateWithoutThreadsOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPremisesInput_1.UserCreateNestedOneWithoutPremisesInput)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutPremiseInput_1.VisionCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutPremiseInput_1.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateNestedManyWithoutPremiseInput_1.TagsOnPremisesCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateNestedManyWithoutPremiseInput_1.VotesOnPremiseCreateNestedManyWithoutPremiseInput)
], PremiseCreateWithoutThreadsOnPremiseInput.prototype, "votesOnPremise", void 0);
PremiseCreateWithoutThreadsOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateWithoutThreadsOnPremiseInput", {
        isAbstract: true
    })
], PremiseCreateWithoutThreadsOnPremiseInput);
exports.PremiseCreateWithoutThreadsOnPremiseInput = PremiseCreateWithoutThreadsOnPremiseInput;
