"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutVotesOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVotesOnVisionInput_1 = require("../inputs/UserCreateOrConnectWithoutVotesOnVisionInput");
const UserCreateWithoutVotesOnVisionInput_1 = require("../inputs/UserCreateWithoutVotesOnVisionInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutVotesOnVisionInput = class UserCreateNestedOneWithoutVotesOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnVisionInput_1.UserCreateWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnVisionInput_1.UserCreateWithoutVotesOnVisionInput)
], UserCreateNestedOneWithoutVotesOnVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnVisionInput_1.UserCreateOrConnectWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVotesOnVisionInput_1.UserCreateOrConnectWithoutVotesOnVisionInput)
], UserCreateNestedOneWithoutVotesOnVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutVotesOnVisionInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutVotesOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutVotesOnVisionInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutVotesOnVisionInput);
exports.UserCreateNestedOneWithoutVotesOnVisionInput = UserCreateNestedOneWithoutVotesOnVisionInput;
