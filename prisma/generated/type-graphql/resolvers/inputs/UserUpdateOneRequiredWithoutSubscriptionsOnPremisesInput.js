"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserCreateOrConnectWithoutSubscriptionsOnPremisesInput");
const UserCreateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserCreateWithoutSubscriptionsOnPremisesInput");
const UserUpdateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserUpdateWithoutSubscriptionsOnPremisesInput");
const UserUpsertWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserUpsertWithoutSubscriptionsOnPremisesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput = class UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnPremisesInput_1.UserCreateWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSubscriptionsOnPremisesInput_1.UserCreateWithoutSubscriptionsOnPremisesInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionsOnPremisesInput_1.UserCreateOrConnectWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutSubscriptionsOnPremisesInput_1.UserCreateOrConnectWithoutSubscriptionsOnPremisesInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutSubscriptionsOnPremisesInput_1.UserUpsertWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutSubscriptionsOnPremisesInput_1.UserUpsertWithoutSubscriptionsOnPremisesInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsOnPremisesInput_1.UserUpdateWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutSubscriptionsOnPremisesInput_1.UserUpdateWithoutSubscriptionsOnPremisesInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput);
exports.UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput = UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput;
