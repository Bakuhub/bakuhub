"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotOrderByWithRelationInput_1 = require("../../../inputs/SnapshotOrderByWithRelationInput");
const SnapshotWhereInput_1 = require("../../../inputs/SnapshotWhereInput");
const SnapshotWhereUniqueInput_1 = require("../../../inputs/SnapshotWhereUniqueInput");
const SnapshotScalarFieldEnum_1 = require("../../../../enums/SnapshotScalarFieldEnum");
let FindManySnapshotArgs = class FindManySnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereInput_1.SnapshotWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereInput_1.SnapshotWhereInput)
], FindManySnapshotArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotOrderByWithRelationInput_1.SnapshotOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySnapshotArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], FindManySnapshotArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySnapshotArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySnapshotArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotScalarFieldEnum_1.SnapshotScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySnapshotArgs.prototype, "distinct", void 0);
FindManySnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySnapshotArgs);
exports.FindManySnapshotArgs = FindManySnapshotArgs;
