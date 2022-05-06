"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateInput_1 = require("../../../inputs/SubscriptionsOnPremisesCreateInput");
const SubscriptionsOnPremisesUpdateInput_1 = require("../../../inputs/SubscriptionsOnPremisesUpdateInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let UpsertSubscriptionsOnPremisesArgs = class UpsertSubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], UpsertSubscriptionsOnPremisesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateInput_1.SubscriptionsOnPremisesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateInput_1.SubscriptionsOnPremisesCreateInput)
], UpsertSubscriptionsOnPremisesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateInput_1.SubscriptionsOnPremisesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateInput_1.SubscriptionsOnPremisesUpdateInput)
], UpsertSubscriptionsOnPremisesArgs.prototype, "update", void 0);
UpsertSubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSubscriptionsOnPremisesArgs);
exports.UpsertSubscriptionsOnPremisesArgs = UpsertSubscriptionsOnPremisesArgs;
