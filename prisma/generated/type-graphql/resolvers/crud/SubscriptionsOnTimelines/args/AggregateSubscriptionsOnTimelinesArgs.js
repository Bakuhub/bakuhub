"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesOrderByWithRelationInput_1 = require("../../../inputs/SubscriptionsOnTimelinesOrderByWithRelationInput");
const SubscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let AggregateSubscriptionsOnTimelinesArgs = class AggregateSubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput)
], AggregateSubscriptionsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesOrderByWithRelationInput_1.SubscriptionsOnTimelinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSubscriptionsOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], AggregateSubscriptionsOnTimelinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSubscriptionsOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSubscriptionsOnTimelinesArgs.prototype, "skip", void 0);
AggregateSubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSubscriptionsOnTimelinesArgs);
exports.AggregateSubscriptionsOnTimelinesArgs = AggregateSubscriptionsOnTimelinesArgs;
