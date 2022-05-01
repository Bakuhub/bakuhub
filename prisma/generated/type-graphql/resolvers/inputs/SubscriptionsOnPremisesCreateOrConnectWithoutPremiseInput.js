"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput = class SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateWithoutPremiseInput_1.SubscriptionsOnPremisesCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateWithoutPremiseInput_1.SubscriptionsOnPremisesCreateWithoutPremiseInput)
], SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput.prototype, "create", void 0);
SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput);
exports.SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput = SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput;
