"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnVisionOrderByWithRelationInput");
const ThreadsOnVisionWhereInput_1 = require("../../../inputs/ThreadsOnVisionWhereInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../../../inputs/ThreadsOnVisionWhereUniqueInput");
const ThreadsOnVisionScalarFieldEnum_1 = require("../../../../enums/ThreadsOnVisionScalarFieldEnum");
let FindManyThreadsOnVisionArgs = class FindManyThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], FindManyThreadsOnVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionOrderByWithRelationInput_1.ThreadsOnVisionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyThreadsOnVisionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], FindManyThreadsOnVisionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyThreadsOnVisionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyThreadsOnVisionArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionScalarFieldEnum_1.ThreadsOnVisionScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyThreadsOnVisionArgs.prototype, "distinct", void 0);
FindManyThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyThreadsOnVisionArgs);
exports.FindManyThreadsOnVisionArgs = FindManyThreadsOnVisionArgs;
