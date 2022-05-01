"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let DeleteSubscriptionsOnPremisesArgs = class DeleteSubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], DeleteSubscriptionsOnPremisesArgs.prototype, "where", void 0);
DeleteSubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteSubscriptionsOnPremisesArgs);
exports.DeleteSubscriptionsOnPremisesArgs = DeleteSubscriptionsOnPremisesArgs;
