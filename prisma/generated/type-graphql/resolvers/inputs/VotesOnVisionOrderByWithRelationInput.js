"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const VisionOrderByWithRelationInput_1 = require("../inputs/VisionOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnVisionOrderByWithRelationInput = class VotesOnVisionOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], VotesOnVisionOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionOrderByWithRelationInput_1.VisionOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionOrderByWithRelationInput_1.VisionOrderByWithRelationInput)
], VotesOnVisionOrderByWithRelationInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionOrderByWithRelationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionOrderByWithRelationInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionOrderByWithRelationInput.prototype, "createdAt", void 0);
VotesOnVisionOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionOrderByWithRelationInput", {
        isAbstract: true
    })
], VotesOnVisionOrderByWithRelationInput);
exports.VotesOnVisionOrderByWithRelationInput = VotesOnVisionOrderByWithRelationInput;
