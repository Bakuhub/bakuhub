"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesUpdateWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateWithoutUserInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput = class SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateWithoutUserInput_1.SubscriptionsOnPremisesUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateWithoutUserInput_1.SubscriptionsOnPremisesUpdateWithoutUserInput)
], SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput);
exports.SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput = SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput;
