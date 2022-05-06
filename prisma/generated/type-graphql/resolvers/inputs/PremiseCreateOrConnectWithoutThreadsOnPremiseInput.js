"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateOrConnectWithoutThreadsOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseCreateWithoutThreadsOnPremiseInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateOrConnectWithoutThreadsOnPremiseInput = class PremiseCreateOrConnectWithoutThreadsOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateOrConnectWithoutThreadsOnPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutThreadsOnPremiseInput_1.PremiseCreateWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutThreadsOnPremiseInput_1.PremiseCreateWithoutThreadsOnPremiseInput)
], PremiseCreateOrConnectWithoutThreadsOnPremiseInput.prototype, "create", void 0);
PremiseCreateOrConnectWithoutThreadsOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateOrConnectWithoutThreadsOnPremiseInput", {
        isAbstract: true
    })
], PremiseCreateOrConnectWithoutThreadsOnPremiseInput);
exports.PremiseCreateOrConnectWithoutThreadsOnPremiseInput = PremiseCreateOrConnectWithoutThreadsOnPremiseInput;
