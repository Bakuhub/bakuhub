"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutSupscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateWithoutSupscriptionsOnTimelinesInput");
const UserUpdateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserUpdateWithoutSupscriptionsOnTimelinesInput");
let UserUpsertWithoutSupscriptionsOnTimelinesInput = class UserUpsertWithoutSupscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSupscriptionsOnTimelinesInput_1.UserUpdateWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutSupscriptionsOnTimelinesInput_1.UserUpdateWithoutSupscriptionsOnTimelinesInput)
], UserUpsertWithoutSupscriptionsOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSupscriptionsOnTimelinesInput_1.UserCreateWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSupscriptionsOnTimelinesInput_1.UserCreateWithoutSupscriptionsOnTimelinesInput)
], UserUpsertWithoutSupscriptionsOnTimelinesInput.prototype, "create", void 0);
UserUpsertWithoutSupscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutSupscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], UserUpsertWithoutSupscriptionsOnTimelinesInput);
exports.UserUpsertWithoutSupscriptionsOnTimelinesInput = UserUpsertWithoutSupscriptionsOnTimelinesInput;
