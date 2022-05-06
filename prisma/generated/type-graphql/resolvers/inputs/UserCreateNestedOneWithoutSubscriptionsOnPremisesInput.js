"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutSubscriptionsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserCreateOrConnectWithoutSubscriptionsOnPremisesInput");
const UserCreateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserCreateWithoutSubscriptionsOnPremisesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutSubscriptionsOnPremisesInput = class UserCreateNestedOneWithoutSubscriptionsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnPremisesInput_1.UserCreateWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSubscriptionsOnPremisesInput_1.UserCreateWithoutSubscriptionsOnPremisesInput)
], UserCreateNestedOneWithoutSubscriptionsOnPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionsOnPremisesInput_1.UserCreateOrConnectWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutSubscriptionsOnPremisesInput_1.UserCreateOrConnectWithoutSubscriptionsOnPremisesInput)
], UserCreateNestedOneWithoutSubscriptionsOnPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutSubscriptionsOnPremisesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutSubscriptionsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutSubscriptionsOnPremisesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutSubscriptionsOnPremisesInput);
exports.UserCreateNestedOneWithoutSubscriptionsOnPremisesInput = UserCreateNestedOneWithoutSubscriptionsOnPremisesInput;
