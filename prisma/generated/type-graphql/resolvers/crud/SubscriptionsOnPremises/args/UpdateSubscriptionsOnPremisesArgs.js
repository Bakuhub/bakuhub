"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesUpdateInput_1 = require("../../../inputs/SubscriptionsOnPremisesUpdateInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let UpdateSubscriptionsOnPremisesArgs = class UpdateSubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateInput_1.SubscriptionsOnPremisesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateInput_1.SubscriptionsOnPremisesUpdateInput)
], UpdateSubscriptionsOnPremisesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], UpdateSubscriptionsOnPremisesArgs.prototype, "where", void 0);
UpdateSubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSubscriptionsOnPremisesArgs);
exports.UpdateSubscriptionsOnPremisesArgs = UpdateSubscriptionsOnPremisesArgs;
