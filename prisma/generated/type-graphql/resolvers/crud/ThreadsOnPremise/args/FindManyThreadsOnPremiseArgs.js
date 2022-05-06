"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnPremiseOrderByWithRelationInput");
const ThreadsOnPremiseWhereInput_1 = require("../../../inputs/ThreadsOnPremiseWhereInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../../../inputs/ThreadsOnPremiseWhereUniqueInput");
const ThreadsOnPremiseScalarFieldEnum_1 = require("../../../../enums/ThreadsOnPremiseScalarFieldEnum");
let FindManyThreadsOnPremiseArgs = class FindManyThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], FindManyThreadsOnPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseOrderByWithRelationInput_1.ThreadsOnPremiseOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyThreadsOnPremiseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], FindManyThreadsOnPremiseArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyThreadsOnPremiseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyThreadsOnPremiseArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarFieldEnum_1.ThreadsOnPremiseScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyThreadsOnPremiseArgs.prototype, "distinct", void 0);
FindManyThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyThreadsOnPremiseArgs);
exports.FindManyThreadsOnPremiseArgs = FindManyThreadsOnPremiseArgs;
