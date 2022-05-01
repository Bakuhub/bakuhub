"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesWhereInput_1 = require("../inputs/SubscriptionsOnPremisesWhereInput");
let SubscriptionsOnPremisesListRelationFilter = class SubscriptionsOnPremisesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput)
], SubscriptionsOnPremisesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput)
], SubscriptionsOnPremisesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput)
], SubscriptionsOnPremisesListRelationFilter.prototype, "none", void 0);
SubscriptionsOnPremisesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesListRelationFilter", {
        isAbstract: true
    })
], SubscriptionsOnPremisesListRelationFilter);
exports.SubscriptionsOnPremisesListRelationFilter = SubscriptionsOnPremisesListRelationFilter;
