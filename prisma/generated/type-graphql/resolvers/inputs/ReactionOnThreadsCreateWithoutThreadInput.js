"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutReactionOnThreadsInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionOnThreadsInput");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnThreadsCreateWithoutThreadInput = class ReactionOnThreadsCreateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnThreadsInput_1.UserCreateNestedOneWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionOnThreadsInput_1.UserCreateNestedOneWithoutReactionOnThreadsInput)
], ReactionOnThreadsCreateWithoutThreadInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateWithoutThreadInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreadsCreateWithoutThreadInput.prototype, "createdAt", void 0);
ReactionOnThreadsCreateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateWithoutThreadInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateWithoutThreadInput);
exports.ReactionOnThreadsCreateWithoutThreadInput = ReactionOnThreadsCreateWithoutThreadInput;
