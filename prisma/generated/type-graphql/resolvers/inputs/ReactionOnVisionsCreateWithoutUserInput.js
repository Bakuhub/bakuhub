"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateNestedOneWithoutReactionOnVisionsInput_1 = require("../inputs/VisionCreateNestedOneWithoutReactionOnVisionsInput");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnVisionsCreateWithoutUserInput = class ReactionOnVisionsCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutReactionOnVisionsInput_1.VisionCreateNestedOneWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutReactionOnVisionsInput_1.VisionCreateNestedOneWithoutReactionOnVisionsInput)
], ReactionOnVisionsCreateWithoutUserInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCreateWithoutUserInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnVisionsCreateWithoutUserInput.prototype, "createdAt", void 0);
ReactionOnVisionsCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnVisionsCreateWithoutUserInput);
exports.ReactionOnVisionsCreateWithoutUserInput = ReactionOnVisionsCreateWithoutUserInput;
