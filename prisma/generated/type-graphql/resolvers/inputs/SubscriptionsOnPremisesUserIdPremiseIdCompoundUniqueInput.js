"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput = class SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput.prototype, "premiseId", void 0);
SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput);
exports.SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput = SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput;
