"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateManyPremiseInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateManyPremiseInput_1 = require("../inputs/VotesOnPremiseCreateManyPremiseInput");
let VotesOnPremiseCreateManyPremiseInputEnvelope = class VotesOnPremiseCreateManyPremiseInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateManyPremiseInput_1.VotesOnPremiseCreateManyPremiseInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseCreateManyPremiseInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VotesOnPremiseCreateManyPremiseInputEnvelope.prototype, "skipDuplicates", void 0);
VotesOnPremiseCreateManyPremiseInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateManyPremiseInputEnvelope", {
        isAbstract: true
    })
], VotesOnPremiseCreateManyPremiseInputEnvelope);
exports.VotesOnPremiseCreateManyPremiseInputEnvelope = VotesOnPremiseCreateManyPremiseInputEnvelope;
