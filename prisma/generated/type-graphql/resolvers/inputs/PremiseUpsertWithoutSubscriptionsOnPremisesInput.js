"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpsertWithoutSubscriptionsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput");
const PremiseUpdateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseUpdateWithoutSubscriptionsOnPremisesInput");
let PremiseUpsertWithoutSubscriptionsOnPremisesInput = class PremiseUpsertWithoutSubscriptionsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutSubscriptionsOnPremisesInput_1.PremiseUpdateWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutSubscriptionsOnPremisesInput_1.PremiseUpdateWithoutSubscriptionsOnPremisesInput)
], PremiseUpsertWithoutSubscriptionsOnPremisesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutSubscriptionsOnPremisesInput_1.PremiseCreateWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutSubscriptionsOnPremisesInput_1.PremiseCreateWithoutSubscriptionsOnPremisesInput)
], PremiseUpsertWithoutSubscriptionsOnPremisesInput.prototype, "create", void 0);
PremiseUpsertWithoutSubscriptionsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpsertWithoutSubscriptionsOnPremisesInput", {
        isAbstract: true
    })
], PremiseUpsertWithoutSubscriptionsOnPremisesInput);
exports.PremiseUpsertWithoutSubscriptionsOnPremisesInput = PremiseUpsertWithoutSubscriptionsOnPremisesInput;
