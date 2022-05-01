"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput");
const PremiseCreateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput = class PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutSubscriptionsOnPremisesInput_1.PremiseCreateWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutSubscriptionsOnPremisesInput_1.PremiseCreateWithoutSubscriptionsOnPremisesInput)
], PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput_1.PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput_1.PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput)
], PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput.prototype, "connect", void 0);
PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput", {
        isAbstract: true
    })
], PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput);
exports.PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput = PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput;
