"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReactionOnThreadsInput_1 = require("../inputs/UserCreateOrConnectWithoutReactionOnThreadsInput");
const UserCreateWithoutReactionOnThreadsInput_1 = require("../inputs/UserCreateWithoutReactionOnThreadsInput");
const UserUpdateWithoutReactionOnThreadsInput_1 = require("../inputs/UserUpdateWithoutReactionOnThreadsInput");
const UserUpsertWithoutReactionOnThreadsInput_1 = require("../inputs/UserUpsertWithoutReactionOnThreadsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutReactionOnThreadsInput = class UserUpdateOneRequiredWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnThreadsInput_1.UserCreateWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnThreadsInput_1.UserCreateWithoutReactionOnThreadsInput)
], UserUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnThreadsInput_1.UserCreateOrConnectWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReactionOnThreadsInput_1.UserCreateOrConnectWithoutReactionOnThreadsInput)
], UserUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutReactionOnThreadsInput_1.UserUpsertWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutReactionOnThreadsInput_1.UserUpsertWithoutReactionOnThreadsInput)
], UserUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnThreadsInput_1.UserUpdateWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReactionOnThreadsInput_1.UserUpdateWithoutReactionOnThreadsInput)
], UserUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutReactionOnThreadsInput);
exports.UserUpdateOneRequiredWithoutReactionOnThreadsInput = UserUpdateOneRequiredWithoutReactionOnThreadsInput;
