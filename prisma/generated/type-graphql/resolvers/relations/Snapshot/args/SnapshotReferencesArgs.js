"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotReferencesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceOrderByWithRelationInput_1 = require("../../../inputs/ReferenceOrderByWithRelationInput");
const ReferenceWhereInput_1 = require("../../../inputs/ReferenceWhereInput");
const ReferenceWhereUniqueInput_1 = require("../../../inputs/ReferenceWhereUniqueInput");
const ReferenceScalarFieldEnum_1 = require("../../../../enums/ReferenceScalarFieldEnum");
let SnapshotReferencesArgs = class SnapshotReferencesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], SnapshotReferencesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceOrderByWithRelationInput_1.ReferenceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotReferencesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], SnapshotReferencesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SnapshotReferencesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SnapshotReferencesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceScalarFieldEnum_1.ReferenceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotReferencesArgs.prototype, "distinct", void 0);
SnapshotReferencesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], SnapshotReferencesArgs);
exports.SnapshotReferencesArgs = SnapshotReferencesArgs;
