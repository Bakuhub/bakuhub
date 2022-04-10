"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateWithoutUserInput");
const VotesOnPremiseUpdateWithoutUserInput_1 = require("../inputs/VotesOnPremiseUpdateWithoutUserInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput = class VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateWithoutUserInput_1.VotesOnPremiseUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateWithoutUserInput_1.VotesOnPremiseUpdateWithoutUserInput)
], VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateWithoutUserInput_1.VotesOnPremiseCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateWithoutUserInput_1.VotesOnPremiseCreateWithoutUserInput)
], VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput);
exports.VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput = VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput;
