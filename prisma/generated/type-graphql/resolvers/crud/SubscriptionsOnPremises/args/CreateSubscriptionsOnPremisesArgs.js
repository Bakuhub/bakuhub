"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateInput_1 = require("../../../inputs/SubscriptionsOnPremisesCreateInput");
let CreateSubscriptionsOnPremisesArgs = class CreateSubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateInput_1.SubscriptionsOnPremisesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateInput_1.SubscriptionsOnPremisesCreateInput)
], CreateSubscriptionsOnPremisesArgs.prototype, "data", void 0);
CreateSubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSubscriptionsOnPremisesArgs);
exports.CreateSubscriptionsOnPremisesArgs = CreateSubscriptionsOnPremisesArgs;
