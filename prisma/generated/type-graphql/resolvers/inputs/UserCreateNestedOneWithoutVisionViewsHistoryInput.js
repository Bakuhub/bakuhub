"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutVisionViewsHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVisionViewsHistoryInput_1 = require("../inputs/UserCreateOrConnectWithoutVisionViewsHistoryInput");
const UserCreateWithoutVisionViewsHistoryInput_1 = require("../inputs/UserCreateWithoutVisionViewsHistoryInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutVisionViewsHistoryInput = class UserCreateNestedOneWithoutVisionViewsHistoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVisionViewsHistoryInput_1.UserCreateWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVisionViewsHistoryInput_1.UserCreateWithoutVisionViewsHistoryInput)
], UserCreateNestedOneWithoutVisionViewsHistoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVisionViewsHistoryInput_1.UserCreateOrConnectWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVisionViewsHistoryInput_1.UserCreateOrConnectWithoutVisionViewsHistoryInput)
], UserCreateNestedOneWithoutVisionViewsHistoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutVisionViewsHistoryInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutVisionViewsHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutVisionViewsHistoryInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutVisionViewsHistoryInput);
exports.UserCreateNestedOneWithoutVisionViewsHistoryInput = UserCreateNestedOneWithoutVisionViewsHistoryInput;
