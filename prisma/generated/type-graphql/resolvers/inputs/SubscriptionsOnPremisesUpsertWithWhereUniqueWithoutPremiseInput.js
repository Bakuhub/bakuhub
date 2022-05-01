"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput");
const SubscriptionsOnPremisesUpdateWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateWithoutPremiseInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput = class SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateWithoutPremiseInput)
], SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateWithoutPremiseInput_1.SubscriptionsOnPremisesCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateWithoutPremiseInput_1.SubscriptionsOnPremisesCreateWithoutPremiseInput)
], SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput.prototype, "create", void 0);
SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput);
exports.SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput = SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput;
