"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateWithoutUserInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesCreateOrConnectWithoutUserInput = class SubscriptionsOnPremisesCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], SubscriptionsOnPremisesCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateWithoutUserInput_1.SubscriptionsOnPremisesCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateWithoutUserInput_1.SubscriptionsOnPremisesCreateWithoutUserInput)
], SubscriptionsOnPremisesCreateOrConnectWithoutUserInput.prototype, "create", void 0);
SubscriptionsOnPremisesCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateOrConnectWithoutUserInput);
exports.SubscriptionsOnPremisesCreateOrConnectWithoutUserInput = SubscriptionsOnPremisesCreateOrConnectWithoutUserInput;
