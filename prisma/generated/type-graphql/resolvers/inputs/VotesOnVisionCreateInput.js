"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutVotesOnVisionInput_1 = require("../inputs/UserCreateNestedOneWithoutVotesOnVisionInput");
const VisionCreateNestedOneWithoutVotesOnVisionInput_1 = require("../inputs/VisionCreateNestedOneWithoutVotesOnVisionInput");
let VotesOnVisionCreateInput = class VotesOnVisionCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnVisionInput_1.UserCreateNestedOneWithoutVotesOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVotesOnVisionInput_1.UserCreateNestedOneWithoutVotesOnVisionInput)
], VotesOnVisionCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutVotesOnVisionInput_1.VisionCreateNestedOneWithoutVotesOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutVotesOnVisionInput_1.VisionCreateNestedOneWithoutVotesOnVisionInput)
], VotesOnVisionCreateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnVisionCreateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionCreateInput.prototype, "updatedAt", void 0);
VotesOnVisionCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateInput", {
        isAbstract: true
    })
], VotesOnVisionCreateInput);
exports.VotesOnVisionCreateInput = VotesOnVisionCreateInput;
