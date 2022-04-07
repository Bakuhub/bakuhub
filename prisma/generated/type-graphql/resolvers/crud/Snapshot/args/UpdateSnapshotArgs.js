"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotUpdateInput_1 = require("../../../inputs/SnapshotUpdateInput");
const SnapshotWhereUniqueInput_1 = require("../../../inputs/SnapshotWhereUniqueInput");
let UpdateSnapshotArgs = class UpdateSnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotUpdateInput_1.SnapshotUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotUpdateInput_1.SnapshotUpdateInput)
], UpdateSnapshotArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], UpdateSnapshotArgs.prototype, "where", void 0);
UpdateSnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSnapshotArgs);
exports.UpdateSnapshotArgs = UpdateSnapshotArgs;
