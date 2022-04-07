"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTimelinesInput_1 = require("../inputs/UserCreateWithoutTimelinesInput");
const UserUpdateWithoutTimelinesInput_1 = require("../inputs/UserUpdateWithoutTimelinesInput");
let UserUpsertWithoutTimelinesInput = class UserUpsertWithoutTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTimelinesInput_1.UserUpdateWithoutTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTimelinesInput_1.UserUpdateWithoutTimelinesInput)
], UserUpsertWithoutTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTimelinesInput_1.UserCreateWithoutTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTimelinesInput_1.UserCreateWithoutTimelinesInput)
], UserUpsertWithoutTimelinesInput.prototype, "create", void 0);
UserUpsertWithoutTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutTimelinesInput", {
        isAbstract: true
    })
], UserUpsertWithoutTimelinesInput);
exports.UserUpsertWithoutTimelinesInput = UserUpsertWithoutTimelinesInput;
