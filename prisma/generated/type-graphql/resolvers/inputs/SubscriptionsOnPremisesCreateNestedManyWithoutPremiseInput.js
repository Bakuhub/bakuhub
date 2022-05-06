"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateManyPremiseInputEnvelope_1 = require("../inputs/SubscriptionsOnPremisesCreateManyPremiseInputEnvelope");
const SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput");
const SubscriptionsOnPremisesCreateWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput = class SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateWithoutPremiseInput_1.SubscriptionsOnPremisesCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput_1.SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateManyPremiseInputEnvelope_1.SubscriptionsOnPremisesCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateManyPremiseInputEnvelope_1.SubscriptionsOnPremisesCreateManyPremiseInputEnvelope)
], SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput.prototype, "connect", void 0);
SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput);
exports.SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput = SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput;
