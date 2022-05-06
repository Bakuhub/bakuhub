"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutReactionOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReactionOnVisionsInput_1 = require("../inputs/UserCreateOrConnectWithoutReactionOnVisionsInput");
const UserCreateWithoutReactionOnVisionsInput_1 = require("../inputs/UserCreateWithoutReactionOnVisionsInput");
const UserUpdateWithoutReactionOnVisionsInput_1 = require("../inputs/UserUpdateWithoutReactionOnVisionsInput");
const UserUpsertWithoutReactionOnVisionsInput_1 = require("../inputs/UserUpsertWithoutReactionOnVisionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutReactionOnVisionsInput = class UserUpdateOneRequiredWithoutReactionOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnVisionsInput_1.UserCreateWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnVisionsInput_1.UserCreateWithoutReactionOnVisionsInput)
], UserUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnVisionsInput_1.UserCreateOrConnectWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReactionOnVisionsInput_1.UserCreateOrConnectWithoutReactionOnVisionsInput)
], UserUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutReactionOnVisionsInput_1.UserUpsertWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutReactionOnVisionsInput_1.UserUpsertWithoutReactionOnVisionsInput)
], UserUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnVisionsInput_1.UserUpdateWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReactionOnVisionsInput_1.UserUpdateWithoutReactionOnVisionsInput)
], UserUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutReactionOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReactionOnVisionsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutReactionOnVisionsInput);
exports.UserUpdateOneRequiredWithoutReactionOnVisionsInput = UserUpdateOneRequiredWithoutReactionOnVisionsInput;
