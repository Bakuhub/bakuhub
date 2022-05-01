"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesScalarWhereInput_1 = require("../inputs/SubscriptionsOnPremisesScalarWhereInput");
const SubscriptionsOnPremisesUpdateManyMutationInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateManyMutationInput");
let SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput = class SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesScalarWhereInput_1.SubscriptionsOnPremisesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesScalarWhereInput_1.SubscriptionsOnPremisesScalarWhereInput)
], SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyMutationInput_1.SubscriptionsOnPremisesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateManyMutationInput_1.SubscriptionsOnPremisesUpdateManyMutationInput)
], SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput.prototype, "data", void 0);
SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput);
exports.SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput = SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput;
