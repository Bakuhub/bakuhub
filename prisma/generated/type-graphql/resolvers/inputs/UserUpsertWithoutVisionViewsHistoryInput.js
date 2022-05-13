"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutVisionViewsHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVisionViewsHistoryInput_1 = require("../inputs/UserCreateWithoutVisionViewsHistoryInput");
const UserUpdateWithoutVisionViewsHistoryInput_1 = require("../inputs/UserUpdateWithoutVisionViewsHistoryInput");
let UserUpsertWithoutVisionViewsHistoryInput = class UserUpsertWithoutVisionViewsHistoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVisionViewsHistoryInput_1.UserUpdateWithoutVisionViewsHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVisionViewsHistoryInput_1.UserUpdateWithoutVisionViewsHistoryInput)
], UserUpsertWithoutVisionViewsHistoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVisionViewsHistoryInput_1.UserCreateWithoutVisionViewsHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVisionViewsHistoryInput_1.UserCreateWithoutVisionViewsHistoryInput)
], UserUpsertWithoutVisionViewsHistoryInput.prototype, "create", void 0);
UserUpsertWithoutVisionViewsHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutVisionViewsHistoryInput", {
        isAbstract: true
    })
], UserUpsertWithoutVisionViewsHistoryInput);
exports.UserUpsertWithoutVisionViewsHistoryInput = UserUpsertWithoutVisionViewsHistoryInput;
