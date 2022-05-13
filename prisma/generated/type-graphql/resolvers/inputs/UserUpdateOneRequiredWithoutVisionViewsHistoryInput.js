"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutVisionViewsHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVisionViewsHistoryInput_1 = require("../inputs/UserCreateOrConnectWithoutVisionViewsHistoryInput");
const UserCreateWithoutVisionViewsHistoryInput_1 = require("../inputs/UserCreateWithoutVisionViewsHistoryInput");
const UserUpdateWithoutVisionViewsHistoryInput_1 = require("../inputs/UserUpdateWithoutVisionViewsHistoryInput");
const UserUpsertWithoutVisionViewsHistoryInput_1 = require("../inputs/UserUpsertWithoutVisionViewsHistoryInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutVisionViewsHistoryInput = class UserUpdateOneRequiredWithoutVisionViewsHistoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVisionViewsHistoryInput_1.UserCreateWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVisionViewsHistoryInput_1.UserCreateWithoutVisionViewsHistoryInput)
], UserUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVisionViewsHistoryInput_1.UserCreateOrConnectWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVisionViewsHistoryInput_1.UserCreateOrConnectWithoutVisionViewsHistoryInput)
], UserUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutVisionViewsHistoryInput_1.UserUpsertWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutVisionViewsHistoryInput_1.UserUpsertWithoutVisionViewsHistoryInput)
], UserUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVisionViewsHistoryInput_1.UserUpdateWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVisionViewsHistoryInput_1.UserUpdateWithoutVisionViewsHistoryInput)
], UserUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutVisionViewsHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVisionViewsHistoryInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutVisionViewsHistoryInput);
exports.UserUpdateOneRequiredWithoutVisionViewsHistoryInput = UserUpdateOneRequiredWithoutVisionViewsHistoryInput;
