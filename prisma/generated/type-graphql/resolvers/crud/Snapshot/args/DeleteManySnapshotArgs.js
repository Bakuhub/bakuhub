"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotWhereInput_1 = require("../../../inputs/SnapshotWhereInput");
let DeleteManySnapshotArgs = class DeleteManySnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereInput_1.SnapshotWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereInput_1.SnapshotWhereInput)
], DeleteManySnapshotArgs.prototype, "where", void 0);
DeleteManySnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySnapshotArgs);
exports.DeleteManySnapshotArgs = DeleteManySnapshotArgs;
