"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput");
let SubscriptionsOnPremisesWhereUniqueInput = class SubscriptionsOnPremisesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput_1.SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput_1.SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput)
], SubscriptionsOnPremisesWhereUniqueInput.prototype, "userId_premiseId", void 0);
SubscriptionsOnPremisesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesWhereUniqueInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesWhereUniqueInput);
exports.SubscriptionsOnPremisesWhereUniqueInput = SubscriptionsOnPremisesWhereUniqueInput;
