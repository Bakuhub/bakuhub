"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestOrderByWithRelationInput_1 = require("../../../inputs/MergeRequestOrderByWithRelationInput");
const MergeRequestWhereInput_1 = require("../../../inputs/MergeRequestWhereInput");
const MergeRequestWhereUniqueInput_1 = require("../../../inputs/MergeRequestWhereUniqueInput");
const MergeRequestScalarFieldEnum_1 = require("../../../../enums/MergeRequestScalarFieldEnum");
let FindFirstMergeRequestArgs = class FindFirstMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereInput_1.MergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereInput_1.MergeRequestWhereInput)
], FindFirstMergeRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestOrderByWithRelationInput_1.MergeRequestOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMergeRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], FindFirstMergeRequestArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMergeRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMergeRequestArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestScalarFieldEnum_1.MergeRequestScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMergeRequestArgs.prototype, "distinct", void 0);
FindFirstMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstMergeRequestArgs);
exports.FindFirstMergeRequestArgs = FindFirstMergeRequestArgs;
