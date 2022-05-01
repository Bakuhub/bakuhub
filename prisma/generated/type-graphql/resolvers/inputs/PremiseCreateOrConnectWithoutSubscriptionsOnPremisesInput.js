"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput = class PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutSubscriptionsOnPremisesInput_1.PremiseCreateWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutSubscriptionsOnPremisesInput_1.PremiseCreateWithoutSubscriptionsOnPremisesInput)
], PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput.prototype, "create", void 0);
PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput", {
        isAbstract: true
    })
], PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput);
exports.PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput = PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput;
