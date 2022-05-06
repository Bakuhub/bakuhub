"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateInput_1 = require("../../../inputs/ThreadsOnVisionCreateInput");
const ThreadsOnVisionUpdateInput_1 = require("../../../inputs/ThreadsOnVisionUpdateInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../../../inputs/ThreadsOnVisionWhereUniqueInput");
let UpsertThreadsOnVisionArgs = class UpsertThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], UpsertThreadsOnVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateInput_1.ThreadsOnVisionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateInput_1.ThreadsOnVisionCreateInput)
], UpsertThreadsOnVisionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateInput_1.ThreadsOnVisionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateInput_1.ThreadsOnVisionUpdateInput)
], UpsertThreadsOnVisionArgs.prototype, "update", void 0);
UpsertThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertThreadsOnVisionArgs);
exports.UpsertThreadsOnVisionArgs = UpsertThreadsOnVisionArgs;
