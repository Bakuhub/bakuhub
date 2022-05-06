"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput");
const UserUpdateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserUpdateWithoutSubscriptionsOnTimelinesInput");
let UserUpsertWithoutSubscriptionsOnTimelinesInput = class UserUpsertWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsOnTimelinesInput_1.UserUpdateWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutSubscriptionsOnTimelinesInput_1.UserUpdateWithoutSubscriptionsOnTimelinesInput)
], UserUpsertWithoutSubscriptionsOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnTimelinesInput_1.UserCreateWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSubscriptionsOnTimelinesInput_1.UserCreateWithoutSubscriptionsOnTimelinesInput)
], UserUpsertWithoutSubscriptionsOnTimelinesInput.prototype, "create", void 0);
UserUpsertWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], UserUpsertWithoutSubscriptionsOnTimelinesInput);
exports.UserUpsertWithoutSubscriptionsOnTimelinesInput = UserUpsertWithoutSubscriptionsOnTimelinesInput;
