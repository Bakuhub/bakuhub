"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesScalarWhereInput_1 = require("../inputs/SubscriptionsOnPremisesScalarWhereInput");
const SubscriptionsOnPremisesUpdateManyMutationInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateManyMutationInput");
let SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput = class SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesScalarWhereInput_1.SubscriptionsOnPremisesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesScalarWhereInput_1.SubscriptionsOnPremisesScalarWhereInput)
], SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyMutationInput_1.SubscriptionsOnPremisesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateManyMutationInput_1.SubscriptionsOnPremisesUpdateManyMutationInput)
], SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput);
exports.SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput = SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput;
