"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateOrConnectWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateWithoutPremiseInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseCreateOrConnectWithoutPremiseInput = class VotesOnPremiseCreateOrConnectWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], VotesOnPremiseCreateOrConnectWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateWithoutPremiseInput_1.VotesOnPremiseCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateWithoutPremiseInput_1.VotesOnPremiseCreateWithoutPremiseInput)
], VotesOnPremiseCreateOrConnectWithoutPremiseInput.prototype, "create", void 0);
VotesOnPremiseCreateOrConnectWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateOrConnectWithoutPremiseInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateOrConnectWithoutPremiseInput);
exports.VotesOnPremiseCreateOrConnectWithoutPremiseInput = VotesOnPremiseCreateOrConnectWithoutPremiseInput;
