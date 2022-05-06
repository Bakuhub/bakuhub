"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateWithoutUserInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseCreateOrConnectWithoutUserInput = class VotesOnPremiseCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], VotesOnPremiseCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateWithoutUserInput_1.VotesOnPremiseCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateWithoutUserInput_1.VotesOnPremiseCreateWithoutUserInput)
], VotesOnPremiseCreateOrConnectWithoutUserInput.prototype, "create", void 0);
VotesOnPremiseCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateOrConnectWithoutUserInput);
exports.VotesOnPremiseCreateOrConnectWithoutUserInput = VotesOnPremiseCreateOrConnectWithoutUserInput;
