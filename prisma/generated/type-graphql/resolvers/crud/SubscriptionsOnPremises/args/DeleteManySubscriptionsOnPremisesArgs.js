"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesWhereInput_1 = require("../../../inputs/SubscriptionsOnPremisesWhereInput");
let DeleteManySubscriptionsOnPremisesArgs = class DeleteManySubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput)
], DeleteManySubscriptionsOnPremisesArgs.prototype, "where", void 0);
DeleteManySubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySubscriptionsOnPremisesArgs);
exports.DeleteManySubscriptionsOnPremisesArgs = DeleteManySubscriptionsOnPremisesArgs;
