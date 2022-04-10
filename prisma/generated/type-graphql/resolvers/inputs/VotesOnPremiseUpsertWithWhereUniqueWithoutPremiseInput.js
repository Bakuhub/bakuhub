"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateWithoutPremiseInput");
const VotesOnPremiseUpdateWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseUpdateWithoutPremiseInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput = class VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateWithoutPremiseInput_1.VotesOnPremiseUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateWithoutPremiseInput_1.VotesOnPremiseUpdateWithoutPremiseInput)
], VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateWithoutPremiseInput_1.VotesOnPremiseCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateWithoutPremiseInput_1.VotesOnPremiseCreateWithoutPremiseInput)
], VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput.prototype, "create", void 0);
VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput);
exports.VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput = VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput;
