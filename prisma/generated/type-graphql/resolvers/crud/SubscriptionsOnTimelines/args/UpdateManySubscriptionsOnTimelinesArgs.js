"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesUpdateManyMutationInput_1 = require("../../../inputs/SubscriptionsOnTimelinesUpdateManyMutationInput");
const SubscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereInput");
let UpdateManySubscriptionsOnTimelinesArgs = class UpdateManySubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyMutationInput_1.SubscriptionsOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateManyMutationInput_1.SubscriptionsOnTimelinesUpdateManyMutationInput)
], UpdateManySubscriptionsOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput)
], UpdateManySubscriptionsOnTimelinesArgs.prototype, "where", void 0);
UpdateManySubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySubscriptionsOnTimelinesArgs);
exports.UpdateManySubscriptionsOnTimelinesArgs = UpdateManySubscriptionsOnTimelinesArgs;
