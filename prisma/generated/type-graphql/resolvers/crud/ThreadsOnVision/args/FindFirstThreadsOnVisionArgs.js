"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnVisionOrderByWithRelationInput");
const ThreadsOnVisionWhereInput_1 = require("../../../inputs/ThreadsOnVisionWhereInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../../../inputs/ThreadsOnVisionWhereUniqueInput");
const ThreadsOnVisionScalarFieldEnum_1 = require("../../../../enums/ThreadsOnVisionScalarFieldEnum");
let FindFirstThreadsOnVisionArgs = class FindFirstThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], FindFirstThreadsOnVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionOrderByWithRelationInput_1.ThreadsOnVisionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstThreadsOnVisionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], FindFirstThreadsOnVisionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstThreadsOnVisionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstThreadsOnVisionArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionScalarFieldEnum_1.ThreadsOnVisionScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstThreadsOnVisionArgs.prototype, "distinct", void 0);
FindFirstThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstThreadsOnVisionArgs);
exports.FindFirstThreadsOnVisionArgs = FindFirstThreadsOnVisionArgs;
