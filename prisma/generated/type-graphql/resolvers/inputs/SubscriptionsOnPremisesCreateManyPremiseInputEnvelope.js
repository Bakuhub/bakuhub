"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateManyPremiseInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateManyPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateManyPremiseInput");
let SubscriptionsOnPremisesCreateManyPremiseInputEnvelope = class SubscriptionsOnPremisesCreateManyPremiseInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateManyPremiseInput_1.SubscriptionsOnPremisesCreateManyPremiseInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesCreateManyPremiseInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SubscriptionsOnPremisesCreateManyPremiseInputEnvelope.prototype, "skipDuplicates", void 0);
SubscriptionsOnPremisesCreateManyPremiseInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateManyPremiseInputEnvelope", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateManyPremiseInputEnvelope);
exports.SubscriptionsOnPremisesCreateManyPremiseInputEnvelope = SubscriptionsOnPremisesCreateManyPremiseInputEnvelope;
