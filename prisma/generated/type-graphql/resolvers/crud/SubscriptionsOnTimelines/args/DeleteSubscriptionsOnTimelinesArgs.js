"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let DeleteSubscriptionsOnTimelinesArgs = class DeleteSubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], DeleteSubscriptionsOnTimelinesArgs.prototype, "where", void 0);
DeleteSubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteSubscriptionsOnTimelinesArgs);
exports.DeleteSubscriptionsOnTimelinesArgs = DeleteSubscriptionsOnTimelinesArgs;
