"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateNestedManyWithoutSnapshotsInput_1 = require("../inputs/ReferenceCreateNestedManyWithoutSnapshotsInput");
let SnapshotCreateInput = class SnapshotCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SnapshotCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateInput.prototype, "versionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateInput.prototype, "s3Url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateInput.prototype, "sourceUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateNestedManyWithoutSnapshotsInput_1.ReferenceCreateNestedManyWithoutSnapshotsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCreateNestedManyWithoutSnapshotsInput_1.ReferenceCreateNestedManyWithoutSnapshotsInput)
], SnapshotCreateInput.prototype, "references", void 0);
SnapshotCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotCreateInput", {
        isAbstract: true
    })
], SnapshotCreateInput);
exports.SnapshotCreateInput = SnapshotCreateInput;
