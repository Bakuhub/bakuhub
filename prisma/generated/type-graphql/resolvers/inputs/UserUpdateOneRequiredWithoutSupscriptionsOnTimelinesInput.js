"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput");
const UserCreateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateWithoutSupscriptionsOnTimelinesInput");
const UserUpdateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserUpdateWithoutSupscriptionsOnTimelinesInput");
const UserUpsertWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserUpsertWithoutSupscriptionsOnTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput = class UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSupscriptionsOnTimelinesInput_1.UserCreateWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSupscriptionsOnTimelinesInput_1.UserCreateWithoutSupscriptionsOnTimelinesInput)
], UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1.UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1.UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput)
], UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutSupscriptionsOnTimelinesInput_1.UserUpsertWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutSupscriptionsOnTimelinesInput_1.UserUpsertWithoutSupscriptionsOnTimelinesInput)
], UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSupscriptionsOnTimelinesInput_1.UserUpdateWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutSupscriptionsOnTimelinesInput_1.UserUpdateWithoutSupscriptionsOnTimelinesInput)
], UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput);
exports.UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput = UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput;
