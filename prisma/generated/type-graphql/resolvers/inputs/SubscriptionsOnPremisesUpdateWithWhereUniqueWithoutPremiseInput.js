"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesUpdateWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateWithoutPremiseInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput = class SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateWithoutPremiseInput)
], SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput.prototype, "data", void 0);
SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput);
exports.SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput = SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput;
