"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotUpdateManyMutationInput_1 = require("../../../inputs/SnapshotUpdateManyMutationInput");
const SnapshotWhereInput_1 = require("../../../inputs/SnapshotWhereInput");
let UpdateManySnapshotArgs = class UpdateManySnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotUpdateManyMutationInput_1.SnapshotUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotUpdateManyMutationInput_1.SnapshotUpdateManyMutationInput)
], UpdateManySnapshotArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereInput_1.SnapshotWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereInput_1.SnapshotWhereInput)
], UpdateManySnapshotArgs.prototype, "where", void 0);
UpdateManySnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySnapshotArgs);
exports.UpdateManySnapshotArgs = UpdateManySnapshotArgs;
