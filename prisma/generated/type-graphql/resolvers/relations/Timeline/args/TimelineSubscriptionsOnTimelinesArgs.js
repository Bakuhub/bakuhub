"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineSubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesOrderByWithRelationInput_1 = require("../../../inputs/SubscriptionsOnTimelinesOrderByWithRelationInput");
const SubscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
const SubscriptionsOnTimelinesScalarFieldEnum_1 = require("../../../../enums/SubscriptionsOnTimelinesScalarFieldEnum");
let TimelineSubscriptionsOnTimelinesArgs = class TimelineSubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput)
], TimelineSubscriptionsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesOrderByWithRelationInput_1.SubscriptionsOnTimelinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineSubscriptionsOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], TimelineSubscriptionsOnTimelinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TimelineSubscriptionsOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TimelineSubscriptionsOnTimelinesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarFieldEnum_1.SubscriptionsOnTimelinesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineSubscriptionsOnTimelinesArgs.prototype, "distinct", void 0);
TimelineSubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TimelineSubscriptionsOnTimelinesArgs);
exports.TimelineSubscriptionsOnTimelinesArgs = TimelineSubscriptionsOnTimelinesArgs;
