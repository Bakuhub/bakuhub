"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnMergeRequestOrderByWithRelationInput");
const ThreadsOnMergeRequestWhereInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let AggregateThreadsOnMergeRequestArgs = class AggregateThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], AggregateThreadsOnMergeRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestOrderByWithRelationInput_1.ThreadsOnMergeRequestOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateThreadsOnMergeRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], AggregateThreadsOnMergeRequestArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateThreadsOnMergeRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateThreadsOnMergeRequestArgs.prototype, "skip", void 0);
AggregateThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateThreadsOnMergeRequestArgs);
exports.AggregateThreadsOnMergeRequestArgs = AggregateThreadsOnMergeRequestArgs;
