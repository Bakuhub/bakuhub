"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutVotesOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVotesOnTimelineInput_1 = require("../inputs/UserCreateOrConnectWithoutVotesOnTimelineInput");
const UserCreateWithoutVotesOnTimelineInput_1 = require("../inputs/UserCreateWithoutVotesOnTimelineInput");
const UserUpdateWithoutVotesOnTimelineInput_1 = require("../inputs/UserUpdateWithoutVotesOnTimelineInput");
const UserUpsertWithoutVotesOnTimelineInput_1 = require("../inputs/UserUpsertWithoutVotesOnTimelineInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutVotesOnTimelineInput = class UserUpdateOneRequiredWithoutVotesOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnTimelineInput_1.UserCreateWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnTimelineInput_1.UserCreateWithoutVotesOnTimelineInput)
], UserUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnTimelineInput_1.UserCreateOrConnectWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVotesOnTimelineInput_1.UserCreateOrConnectWithoutVotesOnTimelineInput)
], UserUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutVotesOnTimelineInput_1.UserUpsertWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutVotesOnTimelineInput_1.UserUpsertWithoutVotesOnTimelineInput)
], UserUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnTimelineInput_1.UserUpdateWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVotesOnTimelineInput_1.UserUpdateWithoutVotesOnTimelineInput)
], UserUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutVotesOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVotesOnTimelineInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutVotesOnTimelineInput);
exports.UserUpdateOneRequiredWithoutVotesOnTimelineInput = UserUpdateOneRequiredWithoutVotesOnTimelineInput;
