"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadCreateNestedOneWithoutReactionOnThreadsInput");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnThreadsCreateWithoutUserInput = class ReactionOnThreadsCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutReactionOnThreadsInput_1.ThreadCreateNestedOneWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutReactionOnThreadsInput_1.ThreadCreateNestedOneWithoutReactionOnThreadsInput)
], ReactionOnThreadsCreateWithoutUserInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateWithoutUserInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreadsCreateWithoutUserInput.prototype, "createdAt", void 0);
ReactionOnThreadsCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateWithoutUserInput);
exports.ReactionOnThreadsCreateWithoutUserInput = ReactionOnThreadsCreateWithoutUserInput;
