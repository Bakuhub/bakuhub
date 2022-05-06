"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesUpdateInput_1 = require("../../../inputs/SubscriptionsOnTimelinesUpdateInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let UpdateSubscriptionsOnTimelinesArgs = class UpdateSubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateInput_1.SubscriptionsOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateInput_1.SubscriptionsOnTimelinesUpdateInput)
], UpdateSubscriptionsOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], UpdateSubscriptionsOnTimelinesArgs.prototype, "where", void 0);
UpdateSubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSubscriptionsOnTimelinesArgs);
exports.UpdateSubscriptionsOnTimelinesArgs = UpdateSubscriptionsOnTimelinesArgs;
