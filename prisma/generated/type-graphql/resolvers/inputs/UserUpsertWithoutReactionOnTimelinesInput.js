"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReactionOnTimelinesInput_1 = require("../inputs/UserCreateWithoutReactionOnTimelinesInput");
const UserUpdateWithoutReactionOnTimelinesInput_1 = require("../inputs/UserUpdateWithoutReactionOnTimelinesInput");
let UserUpsertWithoutReactionOnTimelinesInput = class UserUpsertWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnTimelinesInput_1.UserUpdateWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReactionOnTimelinesInput_1.UserUpdateWithoutReactionOnTimelinesInput)
], UserUpsertWithoutReactionOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnTimelinesInput_1.UserCreateWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnTimelinesInput_1.UserCreateWithoutReactionOnTimelinesInput)
], UserUpsertWithoutReactionOnTimelinesInput.prototype, "create", void 0);
UserUpsertWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], UserUpsertWithoutReactionOnTimelinesInput);
exports.UserUpsertWithoutReactionOnTimelinesInput = UserUpsertWithoutReactionOnTimelinesInput;
