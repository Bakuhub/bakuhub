"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutVisionViewsHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVisionViewsHistoryInput_1 = require("../inputs/UserCreateWithoutVisionViewsHistoryInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutVisionViewsHistoryInput = class UserCreateOrConnectWithoutVisionViewsHistoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutVisionViewsHistoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVisionViewsHistoryInput_1.UserCreateWithoutVisionViewsHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVisionViewsHistoryInput_1.UserCreateWithoutVisionViewsHistoryInput)
], UserCreateOrConnectWithoutVisionViewsHistoryInput.prototype, "create", void 0);
UserCreateOrConnectWithoutVisionViewsHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutVisionViewsHistoryInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutVisionViewsHistoryInput);
exports.UserCreateOrConnectWithoutVisionViewsHistoryInput = UserCreateOrConnectWithoutVisionViewsHistoryInput;
