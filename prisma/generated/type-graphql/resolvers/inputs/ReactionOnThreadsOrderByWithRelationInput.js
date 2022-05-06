"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadOrderByWithRelationInput_1 = require("../inputs/ThreadOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnThreadsOrderByWithRelationInput = class ReactionOnThreadsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ReactionOnThreadsOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput)
], ReactionOnThreadsOrderByWithRelationInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsOrderByWithRelationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsOrderByWithRelationInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsOrderByWithRelationInput.prototype, "createdAt", void 0);
ReactionOnThreadsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsOrderByWithRelationInput", {
        isAbstract: true
    })
], ReactionOnThreadsOrderByWithRelationInput);
exports.ReactionOnThreadsOrderByWithRelationInput = ReactionOnThreadsOrderByWithRelationInput;
