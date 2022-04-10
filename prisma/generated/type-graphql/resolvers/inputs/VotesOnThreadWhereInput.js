"use strict";
var VotesOnThreadWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const ThreadRelationFilter_1 = require("../inputs/ThreadRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let VotesOnThreadWhereInput = VotesOnThreadWhereInput_1 = class VotesOnThreadWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], VotesOnThreadWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnThreadWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadRelationFilter_1.ThreadRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadRelationFilter_1.ThreadRelationFilter)
], VotesOnThreadWhereInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnThreadWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], VotesOnThreadWhereInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VotesOnThreadWhereInput.prototype, "createdAt", void 0);
VotesOnThreadWhereInput = VotesOnThreadWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadWhereInput", {
        isAbstract: true
    })
], VotesOnThreadWhereInput);
exports.VotesOnThreadWhereInput = VotesOnThreadWhereInput;
