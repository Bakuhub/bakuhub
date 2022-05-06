"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let FindUniqueSubscriptionsOnTimelinesArgs = class FindUniqueSubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], FindUniqueSubscriptionsOnTimelinesArgs.prototype, "where", void 0);
FindUniqueSubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSubscriptionsOnTimelinesArgs);
exports.FindUniqueSubscriptionsOnTimelinesArgs = FindUniqueSubscriptionsOnTimelinesArgs;
