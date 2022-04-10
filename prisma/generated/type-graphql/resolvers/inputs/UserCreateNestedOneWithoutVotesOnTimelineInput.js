"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutVotesOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVotesOnTimelineInput_1 = require("../inputs/UserCreateOrConnectWithoutVotesOnTimelineInput");
const UserCreateWithoutVotesOnTimelineInput_1 = require("../inputs/UserCreateWithoutVotesOnTimelineInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutVotesOnTimelineInput = class UserCreateNestedOneWithoutVotesOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnTimelineInput_1.UserCreateWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnTimelineInput_1.UserCreateWithoutVotesOnTimelineInput)
], UserCreateNestedOneWithoutVotesOnTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnTimelineInput_1.UserCreateOrConnectWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVotesOnTimelineInput_1.UserCreateOrConnectWithoutVotesOnTimelineInput)
], UserCreateNestedOneWithoutVotesOnTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutVotesOnTimelineInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutVotesOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutVotesOnTimelineInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutVotesOnTimelineInput);
exports.UserCreateNestedOneWithoutVotesOnTimelineInput = UserCreateNestedOneWithoutVotesOnTimelineInput;
