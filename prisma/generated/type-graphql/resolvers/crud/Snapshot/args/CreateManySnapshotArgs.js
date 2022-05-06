"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCreateManyInput_1 = require("../../../inputs/SnapshotCreateManyInput");
let CreateManySnapshotArgs = class CreateManySnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotCreateManyInput_1.SnapshotCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySnapshotArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySnapshotArgs.prototype, "skipDuplicates", void 0);
CreateManySnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySnapshotArgs);
exports.CreateManySnapshotArgs = CreateManySnapshotArgs;
