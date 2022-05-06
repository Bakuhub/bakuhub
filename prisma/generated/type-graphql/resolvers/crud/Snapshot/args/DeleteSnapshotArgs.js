"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotWhereUniqueInput_1 = require("../../../inputs/SnapshotWhereUniqueInput");
let DeleteSnapshotArgs = class DeleteSnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], DeleteSnapshotArgs.prototype, "where", void 0);
DeleteSnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteSnapshotArgs);
exports.DeleteSnapshotArgs = DeleteSnapshotArgs;
