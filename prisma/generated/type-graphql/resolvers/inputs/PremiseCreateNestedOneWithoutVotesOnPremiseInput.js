"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateNestedOneWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseCreateOrConnectWithoutVotesOnPremiseInput");
const PremiseCreateWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseCreateWithoutVotesOnPremiseInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateNestedOneWithoutVotesOnPremiseInput = class PremiseCreateNestedOneWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutVotesOnPremiseInput_1.PremiseCreateWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutVotesOnPremiseInput_1.PremiseCreateWithoutVotesOnPremiseInput)
], PremiseCreateNestedOneWithoutVotesOnPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutVotesOnPremiseInput_1.PremiseCreateOrConnectWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutVotesOnPremiseInput_1.PremiseCreateOrConnectWithoutVotesOnPremiseInput)
], PremiseCreateNestedOneWithoutVotesOnPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateNestedOneWithoutVotesOnPremiseInput.prototype, "connect", void 0);
PremiseCreateNestedOneWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateNestedOneWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], PremiseCreateNestedOneWithoutVotesOnPremiseInput);
exports.PremiseCreateNestedOneWithoutVotesOnPremiseInput = PremiseCreateNestedOneWithoutVotesOnPremiseInput;
