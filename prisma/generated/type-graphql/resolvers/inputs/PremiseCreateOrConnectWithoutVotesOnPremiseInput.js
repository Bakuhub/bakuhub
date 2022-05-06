"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateOrConnectWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseCreateWithoutVotesOnPremiseInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateOrConnectWithoutVotesOnPremiseInput = class PremiseCreateOrConnectWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateOrConnectWithoutVotesOnPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutVotesOnPremiseInput_1.PremiseCreateWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutVotesOnPremiseInput_1.PremiseCreateWithoutVotesOnPremiseInput)
], PremiseCreateOrConnectWithoutVotesOnPremiseInput.prototype, "create", void 0);
PremiseCreateOrConnectWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateOrConnectWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], PremiseCreateOrConnectWithoutVotesOnPremiseInput);
exports.PremiseCreateOrConnectWithoutVotesOnPremiseInput = PremiseCreateOrConnectWithoutVotesOnPremiseInput;
