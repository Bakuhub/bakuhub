"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateManyInput_1 = require("../../../inputs/SubscriptionsOnPremisesCreateManyInput");
let CreateManySubscriptionsOnPremisesArgs = class CreateManySubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateManyInput_1.SubscriptionsOnPremisesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySubscriptionsOnPremisesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySubscriptionsOnPremisesArgs.prototype, "skipDuplicates", void 0);
CreateManySubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySubscriptionsOnPremisesArgs);
exports.CreateManySubscriptionsOnPremisesArgs = CreateManySubscriptionsOnPremisesArgs;
