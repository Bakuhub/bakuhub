"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let FindUniqueSubscriptionsOnPremisesArgs = class FindUniqueSubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], FindUniqueSubscriptionsOnPremisesArgs.prototype, "where", void 0);
FindUniqueSubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSubscriptionsOnPremisesArgs);
exports.FindUniqueSubscriptionsOnPremisesArgs = FindUniqueSubscriptionsOnPremisesArgs;
