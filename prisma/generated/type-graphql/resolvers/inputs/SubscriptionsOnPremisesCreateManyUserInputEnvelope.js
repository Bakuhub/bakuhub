"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateManyUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateManyUserInput");
let SubscriptionsOnPremisesCreateManyUserInputEnvelope = class SubscriptionsOnPremisesCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateManyUserInput_1.SubscriptionsOnPremisesCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SubscriptionsOnPremisesCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
SubscriptionsOnPremisesCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateManyUserInputEnvelope);
exports.SubscriptionsOnPremisesCreateManyUserInputEnvelope = SubscriptionsOnPremisesCreateManyUserInputEnvelope;
