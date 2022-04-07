"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTimelinesInput_1 = require("../inputs/UserCreateOrConnectWithoutTimelinesInput");
const UserCreateWithoutTimelinesInput_1 = require("../inputs/UserCreateWithoutTimelinesInput");
const UserUpdateWithoutTimelinesInput_1 = require("../inputs/UserUpdateWithoutTimelinesInput");
const UserUpsertWithoutTimelinesInput_1 = require("../inputs/UserUpsertWithoutTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutTimelinesInput = class UserUpdateOneRequiredWithoutTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTimelinesInput_1.UserCreateWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTimelinesInput_1.UserCreateWithoutTimelinesInput)
], UserUpdateOneRequiredWithoutTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTimelinesInput_1.UserCreateOrConnectWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTimelinesInput_1.UserCreateOrConnectWithoutTimelinesInput)
], UserUpdateOneRequiredWithoutTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutTimelinesInput_1.UserUpsertWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutTimelinesInput_1.UserUpsertWithoutTimelinesInput)
], UserUpdateOneRequiredWithoutTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTimelinesInput_1.UserUpdateWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTimelinesInput_1.UserUpdateWithoutTimelinesInput)
], UserUpdateOneRequiredWithoutTimelinesInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTimelinesInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutTimelinesInput);
exports.UserUpdateOneRequiredWithoutTimelinesInput = UserUpdateOneRequiredWithoutTimelinesInput;
