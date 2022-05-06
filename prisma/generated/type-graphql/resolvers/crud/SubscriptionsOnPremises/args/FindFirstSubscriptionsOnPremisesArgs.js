"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesOrderByWithRelationInput_1 = require("../../../inputs/SubscriptionsOnPremisesOrderByWithRelationInput");
const SubscriptionsOnPremisesWhereInput_1 = require("../../../inputs/SubscriptionsOnPremisesWhereInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnPremisesWhereUniqueInput");
const SubscriptionsOnPremisesScalarFieldEnum_1 = require("../../../../enums/SubscriptionsOnPremisesScalarFieldEnum");
let FindFirstSubscriptionsOnPremisesArgs = class FindFirstSubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput)
], FindFirstSubscriptionsOnPremisesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesOrderByWithRelationInput_1.SubscriptionsOnPremisesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSubscriptionsOnPremisesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput)
], FindFirstSubscriptionsOnPremisesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSubscriptionsOnPremisesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSubscriptionsOnPremisesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarFieldEnum_1.SubscriptionsOnPremisesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSubscriptionsOnPremisesArgs.prototype, "distinct", void 0);
FindFirstSubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSubscriptionsOnPremisesArgs);
exports.FindFirstSubscriptionsOnPremisesArgs = FindFirstSubscriptionsOnPremisesArgs;
