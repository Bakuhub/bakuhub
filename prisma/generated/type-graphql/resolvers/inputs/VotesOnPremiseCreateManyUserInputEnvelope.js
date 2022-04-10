"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateManyUserInput_1 = require("../inputs/VotesOnPremiseCreateManyUserInput");
let VotesOnPremiseCreateManyUserInputEnvelope = class VotesOnPremiseCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateManyUserInput_1.VotesOnPremiseCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VotesOnPremiseCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
VotesOnPremiseCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], VotesOnPremiseCreateManyUserInputEnvelope);
exports.VotesOnPremiseCreateManyUserInputEnvelope = VotesOnPremiseCreateManyUserInputEnvelope;
