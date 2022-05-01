"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateWithoutUserInput");
const SubscriptionsOnPremisesUpdateWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateWithoutUserInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput = class SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateWithoutUserInput_1.SubscriptionsOnPremisesUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateWithoutUserInput_1.SubscriptionsOnPremisesUpdateWithoutUserInput)
], SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateWithoutUserInput_1.SubscriptionsOnPremisesCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateWithoutUserInput_1.SubscriptionsOnPremisesCreateWithoutUserInput)
], SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput);
exports.SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput = SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput;
