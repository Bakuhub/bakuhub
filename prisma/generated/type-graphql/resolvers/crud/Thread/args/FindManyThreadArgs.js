"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadOrderByWithRelationInput_1 = require("../../../inputs/ThreadOrderByWithRelationInput");
const ThreadWhereInput_1 = require("../../../inputs/ThreadWhereInput");
const ThreadWhereUniqueInput_1 = require("../../../inputs/ThreadWhereUniqueInput");
const ThreadScalarFieldEnum_1 = require("../../../../enums/ThreadScalarFieldEnum");
let FindManyThreadArgs = class FindManyThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereInput_1.ThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereInput_1.ThreadWhereInput)
], FindManyThreadArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyThreadArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], FindManyThreadArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyThreadArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyThreadArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadScalarFieldEnum_1.ThreadScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyThreadArgs.prototype, "distinct", void 0);
FindManyThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyThreadArgs);
exports.FindManyThreadArgs = FindManyThreadArgs;
