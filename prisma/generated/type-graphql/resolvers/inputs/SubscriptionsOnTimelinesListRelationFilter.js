"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesWhereInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereInput");
let SubscriptionsOnTimelinesListRelationFilter = class SubscriptionsOnTimelinesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput)
], SubscriptionsOnTimelinesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput)
], SubscriptionsOnTimelinesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput)
], SubscriptionsOnTimelinesListRelationFilter.prototype, "none", void 0);
SubscriptionsOnTimelinesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesListRelationFilter", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesListRelationFilter);
exports.SubscriptionsOnTimelinesListRelationFilter = SubscriptionsOnTimelinesListRelationFilter;
