"use strict";
var VotesOnVisionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VisionRelationFilter_1 = require("../inputs/VisionRelationFilter");
let VotesOnVisionWhereInput = VotesOnVisionWhereInput_1 = class VotesOnVisionWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], VotesOnVisionWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnVisionWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionRelationFilter_1.VisionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionRelationFilter_1.VisionRelationFilter)
], VotesOnVisionWhereInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnVisionWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], VotesOnVisionWhereInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VotesOnVisionWhereInput.prototype, "createdAt", void 0);
VotesOnVisionWhereInput = VotesOnVisionWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionWhereInput", {
        isAbstract: true
    })
], VotesOnVisionWhereInput);
exports.VotesOnVisionWhereInput = VotesOnVisionWhereInput;
