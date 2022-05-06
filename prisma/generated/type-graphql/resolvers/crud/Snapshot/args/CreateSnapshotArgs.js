"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCreateInput_1 = require("../../../inputs/SnapshotCreateInput");
let CreateSnapshotArgs = class CreateSnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCreateInput_1.SnapshotCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotCreateInput_1.SnapshotCreateInput)
], CreateSnapshotArgs.prototype, "data", void 0);
CreateSnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSnapshotArgs);
exports.CreateSnapshotArgs = CreateSnapshotArgs;
