"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateNestedOneWithoutThreadsOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseCreateOrConnectWithoutThreadsOnPremiseInput");
const PremiseCreateWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseCreateWithoutThreadsOnPremiseInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateNestedOneWithoutThreadsOnPremiseInput = class PremiseCreateNestedOneWithoutThreadsOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutThreadsOnPremiseInput_1.PremiseCreateWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutThreadsOnPremiseInput_1.PremiseCreateWithoutThreadsOnPremiseInput)
], PremiseCreateNestedOneWithoutThreadsOnPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutThreadsOnPremiseInput_1.PremiseCreateOrConnectWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutThreadsOnPremiseInput_1.PremiseCreateOrConnectWithoutThreadsOnPremiseInput)
], PremiseCreateNestedOneWithoutThreadsOnPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateNestedOneWithoutThreadsOnPremiseInput.prototype, "connect", void 0);
PremiseCreateNestedOneWithoutThreadsOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateNestedOneWithoutThreadsOnPremiseInput", {
        isAbstract: true
    })
], PremiseCreateNestedOneWithoutThreadsOnPremiseInput);
exports.PremiseCreateNestedOneWithoutThreadsOnPremiseInput = PremiseCreateNestedOneWithoutThreadsOnPremiseInput;
