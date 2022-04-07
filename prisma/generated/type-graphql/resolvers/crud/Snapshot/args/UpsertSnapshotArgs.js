"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCreateInput_1 = require("../../../inputs/SnapshotCreateInput");
const SnapshotUpdateInput_1 = require("../../../inputs/SnapshotUpdateInput");
const SnapshotWhereUniqueInput_1 = require("../../../inputs/SnapshotWhereUniqueInput");
let UpsertSnapshotArgs = class UpsertSnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], UpsertSnapshotArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCreateInput_1.SnapshotCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotCreateInput_1.SnapshotCreateInput)
], UpsertSnapshotArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotUpdateInput_1.SnapshotUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotUpdateInput_1.SnapshotUpdateInput)
], UpsertSnapshotArgs.prototype, "update", void 0);
UpsertSnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSnapshotArgs);
exports.UpsertSnapshotArgs = UpsertSnapshotArgs;
