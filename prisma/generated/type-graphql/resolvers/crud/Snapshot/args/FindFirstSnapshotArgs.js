"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotOrderByWithRelationInput_1 = require("../../../inputs/SnapshotOrderByWithRelationInput");
const SnapshotWhereInput_1 = require("../../../inputs/SnapshotWhereInput");
const SnapshotWhereUniqueInput_1 = require("../../../inputs/SnapshotWhereUniqueInput");
const SnapshotScalarFieldEnum_1 = require("../../../../enums/SnapshotScalarFieldEnum");
let FindFirstSnapshotArgs = class FindFirstSnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereInput_1.SnapshotWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereInput_1.SnapshotWhereInput)
], FindFirstSnapshotArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotOrderByWithRelationInput_1.SnapshotOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSnapshotArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], FindFirstSnapshotArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSnapshotArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSnapshotArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotScalarFieldEnum_1.SnapshotScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSnapshotArgs.prototype, "distinct", void 0);
FindFirstSnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSnapshotArgs);
exports.FindFirstSnapshotArgs = FindFirstSnapshotArgs;
