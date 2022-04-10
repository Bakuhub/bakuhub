"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutVotesOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVotesOnVisionInput_1 = require("../inputs/UserCreateOrConnectWithoutVotesOnVisionInput");
const UserCreateWithoutVotesOnVisionInput_1 = require("../inputs/UserCreateWithoutVotesOnVisionInput");
const UserUpdateWithoutVotesOnVisionInput_1 = require("../inputs/UserUpdateWithoutVotesOnVisionInput");
const UserUpsertWithoutVotesOnVisionInput_1 = require("../inputs/UserUpsertWithoutVotesOnVisionInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutVotesOnVisionInput = class UserUpdateOneRequiredWithoutVotesOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnVisionInput_1.UserCreateWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnVisionInput_1.UserCreateWithoutVotesOnVisionInput)
], UserUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnVisionInput_1.UserCreateOrConnectWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVotesOnVisionInput_1.UserCreateOrConnectWithoutVotesOnVisionInput)
], UserUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutVotesOnVisionInput_1.UserUpsertWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutVotesOnVisionInput_1.UserUpsertWithoutVotesOnVisionInput)
], UserUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnVisionInput_1.UserUpdateWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVotesOnVisionInput_1.UserUpdateWithoutVotesOnVisionInput)
], UserUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutVotesOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVotesOnVisionInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutVotesOnVisionInput);
exports.UserUpdateOneRequiredWithoutVotesOnVisionInput = UserUpdateOneRequiredWithoutVotesOnVisionInput;
