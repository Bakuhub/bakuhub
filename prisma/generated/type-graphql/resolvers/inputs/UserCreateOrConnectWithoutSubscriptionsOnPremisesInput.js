"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutSubscriptionsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserCreateWithoutSubscriptionsOnPremisesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutSubscriptionsOnPremisesInput = class UserCreateOrConnectWithoutSubscriptionsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutSubscriptionsOnPremisesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnPremisesInput_1.UserCreateWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSubscriptionsOnPremisesInput_1.UserCreateWithoutSubscriptionsOnPremisesInput)
], UserCreateOrConnectWithoutSubscriptionsOnPremisesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutSubscriptionsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutSubscriptionsOnPremisesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutSubscriptionsOnPremisesInput);
exports.UserCreateOrConnectWithoutSubscriptionsOnPremisesInput = UserCreateOrConnectWithoutSubscriptionsOnPremisesInput;
