"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnPremiseOrderByWithRelationInput");
const ThreadsOnPremiseWhereInput_1 = require("../../../inputs/ThreadsOnPremiseWhereInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../../../inputs/ThreadsOnPremiseWhereUniqueInput");
const ThreadsOnPremiseScalarFieldEnum_1 = require("../../../../enums/ThreadsOnPremiseScalarFieldEnum");
let FindFirstThreadsOnPremiseArgs = class FindFirstThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], FindFirstThreadsOnPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseOrderByWithRelationInput_1.ThreadsOnPremiseOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstThreadsOnPremiseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], FindFirstThreadsOnPremiseArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstThreadsOnPremiseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstThreadsOnPremiseArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarFieldEnum_1.ThreadsOnPremiseScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstThreadsOnPremiseArgs.prototype, "distinct", void 0);
FindFirstThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstThreadsOnPremiseArgs);
exports.FindFirstThreadsOnPremiseArgs = FindFirstThreadsOnPremiseArgs;
