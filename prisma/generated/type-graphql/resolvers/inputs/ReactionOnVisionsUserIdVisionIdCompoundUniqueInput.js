"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUserIdVisionIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReactionOnVisionsUserIdVisionIdCompoundUniqueInput = class ReactionOnVisionsUserIdVisionIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsUserIdVisionIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsUserIdVisionIdCompoundUniqueInput.prototype, "visionId", void 0);
ReactionOnVisionsUserIdVisionIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUserIdVisionIdCompoundUniqueInput", {
        isAbstract: true
    })
], ReactionOnVisionsUserIdVisionIdCompoundUniqueInput);
exports.ReactionOnVisionsUserIdVisionIdCompoundUniqueInput = ReactionOnVisionsUserIdVisionIdCompoundUniqueInput;
