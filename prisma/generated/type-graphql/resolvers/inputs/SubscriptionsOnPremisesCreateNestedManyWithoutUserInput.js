"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateManyUserInputEnvelope_1 = require("../inputs/SubscriptionsOnPremisesCreateManyUserInputEnvelope");
const SubscriptionsOnPremisesCreateOrConnectWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutUserInput");
const SubscriptionsOnPremisesCreateWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateWithoutUserInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesCreateNestedManyWithoutUserInput = class SubscriptionsOnPremisesCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateWithoutUserInput_1.SubscriptionsOnPremisesCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateOrConnectWithoutUserInput_1.SubscriptionsOnPremisesCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateManyUserInputEnvelope_1.SubscriptionsOnPremisesCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateManyUserInputEnvelope_1.SubscriptionsOnPremisesCreateManyUserInputEnvelope)
], SubscriptionsOnPremisesCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
SubscriptionsOnPremisesCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateNestedManyWithoutUserInput);
exports.SubscriptionsOnPremisesCreateNestedManyWithoutUserInput = SubscriptionsOnPremisesCreateNestedManyWithoutUserInput;
