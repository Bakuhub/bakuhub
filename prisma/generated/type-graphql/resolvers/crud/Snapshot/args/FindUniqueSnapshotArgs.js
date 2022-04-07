"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotWhereUniqueInput_1 = require("../../../inputs/SnapshotWhereUniqueInput");
let FindUniqueSnapshotArgs = class FindUniqueSnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], FindUniqueSnapshotArgs.prototype, "where", void 0);
FindUniqueSnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSnapshotArgs);
exports.FindUniqueSnapshotArgs = FindUniqueSnapshotArgs;
