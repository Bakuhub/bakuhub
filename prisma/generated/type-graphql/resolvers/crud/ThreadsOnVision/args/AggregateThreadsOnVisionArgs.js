"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnVisionOrderByWithRelationInput");
const ThreadsOnVisionWhereInput_1 = require("../../../inputs/ThreadsOnVisionWhereInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../../../inputs/ThreadsOnVisionWhereUniqueInput");
let AggregateThreadsOnVisionArgs = class AggregateThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], AggregateThreadsOnVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionOrderByWithRelationInput_1.ThreadsOnVisionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateThreadsOnVisionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], AggregateThreadsOnVisionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateThreadsOnVisionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateThreadsOnVisionArgs.prototype, "skip", void 0);
AggregateThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateThreadsOnVisionArgs);
exports.AggregateThreadsOnVisionArgs = AggregateThreadsOnVisionArgs;
