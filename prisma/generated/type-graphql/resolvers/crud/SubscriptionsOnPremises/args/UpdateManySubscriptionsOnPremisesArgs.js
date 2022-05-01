"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesUpdateManyMutationInput_1 = require("../../../inputs/SubscriptionsOnPremisesUpdateManyMutationInput");
const SubscriptionsOnPremisesWhereInput_1 = require("../../../inputs/SubscriptionsOnPremisesWhereInput");
let UpdateManySubscriptionsOnPremisesArgs = class UpdateManySubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyMutationInput_1.SubscriptionsOnPremisesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateManyMutationInput_1.SubscriptionsOnPremisesUpdateManyMutationInput)
], UpdateManySubscriptionsOnPremisesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput)
], UpdateManySubscriptionsOnPremisesArgs.prototype, "where", void 0);
UpdateManySubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySubscriptionsOnPremisesArgs);
exports.UpdateManySubscriptionsOnPremisesArgs = UpdateManySubscriptionsOnPremisesArgs;
