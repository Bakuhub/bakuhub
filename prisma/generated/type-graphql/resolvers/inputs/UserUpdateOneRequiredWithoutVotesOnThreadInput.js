"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutVotesOnThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVotesOnThreadInput_1 = require("../inputs/UserCreateOrConnectWithoutVotesOnThreadInput");
const UserCreateWithoutVotesOnThreadInput_1 = require("../inputs/UserCreateWithoutVotesOnThreadInput");
const UserUpdateWithoutVotesOnThreadInput_1 = require("../inputs/UserUpdateWithoutVotesOnThreadInput");
const UserUpsertWithoutVotesOnThreadInput_1 = require("../inputs/UserUpsertWithoutVotesOnThreadInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutVotesOnThreadInput = class UserUpdateOneRequiredWithoutVotesOnThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnThreadInput_1.UserCreateWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnThreadInput_1.UserCreateWithoutVotesOnThreadInput)
], UserUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnThreadInput_1.UserCreateOrConnectWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVotesOnThreadInput_1.UserCreateOrConnectWithoutVotesOnThreadInput)
], UserUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutVotesOnThreadInput_1.UserUpsertWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutVotesOnThreadInput_1.UserUpsertWithoutVotesOnThreadInput)
], UserUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnThreadInput_1.UserUpdateWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVotesOnThreadInput_1.UserUpdateWithoutVotesOnThreadInput)
], UserUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutVotesOnThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVotesOnThreadInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutVotesOnThreadInput);
exports.UserUpdateOneRequiredWithoutVotesOnThreadInput = UserUpdateOneRequiredWithoutVotesOnThreadInput;
