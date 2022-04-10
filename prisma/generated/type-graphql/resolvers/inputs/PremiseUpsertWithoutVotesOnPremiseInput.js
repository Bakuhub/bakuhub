"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpsertWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseCreateWithoutVotesOnPremiseInput");
const PremiseUpdateWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseUpdateWithoutVotesOnPremiseInput");
let PremiseUpsertWithoutVotesOnPremiseInput = class PremiseUpsertWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutVotesOnPremiseInput_1.PremiseUpdateWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutVotesOnPremiseInput_1.PremiseUpdateWithoutVotesOnPremiseInput)
], PremiseUpsertWithoutVotesOnPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutVotesOnPremiseInput_1.PremiseCreateWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutVotesOnPremiseInput_1.PremiseCreateWithoutVotesOnPremiseInput)
], PremiseUpsertWithoutVotesOnPremiseInput.prototype, "create", void 0);
PremiseUpsertWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpsertWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], PremiseUpsertWithoutVotesOnPremiseInput);
exports.PremiseUpsertWithoutVotesOnPremiseInput = PremiseUpsertWithoutVotesOnPremiseInput;
