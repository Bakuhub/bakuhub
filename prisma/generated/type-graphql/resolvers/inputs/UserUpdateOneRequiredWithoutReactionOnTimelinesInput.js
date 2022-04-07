"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReactionOnTimelinesInput_1 = require("../inputs/UserCreateOrConnectWithoutReactionOnTimelinesInput");
const UserCreateWithoutReactionOnTimelinesInput_1 = require("../inputs/UserCreateWithoutReactionOnTimelinesInput");
const UserUpdateWithoutReactionOnTimelinesInput_1 = require("../inputs/UserUpdateWithoutReactionOnTimelinesInput");
const UserUpsertWithoutReactionOnTimelinesInput_1 = require("../inputs/UserUpsertWithoutReactionOnTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutReactionOnTimelinesInput = class UserUpdateOneRequiredWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnTimelinesInput_1.UserCreateWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnTimelinesInput_1.UserCreateWithoutReactionOnTimelinesInput)
], UserUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnTimelinesInput_1.UserCreateOrConnectWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReactionOnTimelinesInput_1.UserCreateOrConnectWithoutReactionOnTimelinesInput)
], UserUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutReactionOnTimelinesInput_1.UserUpsertWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutReactionOnTimelinesInput_1.UserUpsertWithoutReactionOnTimelinesInput)
], UserUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnTimelinesInput_1.UserUpdateWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReactionOnTimelinesInput_1.UserUpdateWithoutReactionOnTimelinesInput)
], UserUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutReactionOnTimelinesInput);
exports.UserUpdateOneRequiredWithoutReactionOnTimelinesInput = UserUpdateOneRequiredWithoutReactionOnTimelinesInput;
