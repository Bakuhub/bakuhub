"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsUserIdVisionIdCompoundUniqueInput_1 = require("../inputs/ReactionOnVisionsUserIdVisionIdCompoundUniqueInput");
let ReactionOnVisionsWhereUniqueInput = class ReactionOnVisionsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUserIdVisionIdCompoundUniqueInput_1.ReactionOnVisionsUserIdVisionIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUserIdVisionIdCompoundUniqueInput_1.ReactionOnVisionsUserIdVisionIdCompoundUniqueInput)
], ReactionOnVisionsWhereUniqueInput.prototype, "userId_visionId", void 0);
ReactionOnVisionsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsWhereUniqueInput", {
        isAbstract: true
    })
], ReactionOnVisionsWhereUniqueInput);
exports.ReactionOnVisionsWhereUniqueInput = ReactionOnVisionsWhereUniqueInput;
