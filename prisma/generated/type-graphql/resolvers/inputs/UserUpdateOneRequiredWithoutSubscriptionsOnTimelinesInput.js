"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput");
const UserCreateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput");
const UserUpdateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserUpdateWithoutSubscriptionsOnTimelinesInput");
const UserUpsertWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserUpsertWithoutSubscriptionsOnTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput = class UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnTimelinesInput_1.UserCreateWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSubscriptionsOnTimelinesInput_1.UserCreateWithoutSubscriptionsOnTimelinesInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1.UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1.UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutSubscriptionsOnTimelinesInput_1.UserUpsertWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutSubscriptionsOnTimelinesInput_1.UserUpsertWithoutSubscriptionsOnTimelinesInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsOnTimelinesInput_1.UserUpdateWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutSubscriptionsOnTimelinesInput_1.UserUpdateWithoutSubscriptionsOnTimelinesInput)
], UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput);
exports.UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput = UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput;
