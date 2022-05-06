"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotOrderByWithRelationInput_1 = require("../../../inputs/SnapshotOrderByWithRelationInput");
const SnapshotWhereInput_1 = require("../../../inputs/SnapshotWhereInput");
const SnapshotWhereUniqueInput_1 = require("../../../inputs/SnapshotWhereUniqueInput");
let AggregateSnapshotArgs = class AggregateSnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereInput_1.SnapshotWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereInput_1.SnapshotWhereInput)
], AggregateSnapshotArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotOrderByWithRelationInput_1.SnapshotOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSnapshotArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], AggregateSnapshotArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSnapshotArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSnapshotArgs.prototype, "skip", void 0);
AggregateSnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSnapshotArgs);
exports.AggregateSnapshotArgs = AggregateSnapshotArgs;
