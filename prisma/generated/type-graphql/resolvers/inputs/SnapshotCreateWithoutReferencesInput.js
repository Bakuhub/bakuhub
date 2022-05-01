"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotCreateWithoutReferencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SnapshotCreateWithoutReferencesInput = class SnapshotCreateWithoutReferencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateWithoutReferencesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SnapshotCreateWithoutReferencesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SnapshotCreateWithoutReferencesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateWithoutReferencesInput.prototype, "versionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateWithoutReferencesInput.prototype, "s3Url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateWithoutReferencesInput.prototype, "sourceUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotCreateWithoutReferencesInput.prototype, "caption", void 0);
SnapshotCreateWithoutReferencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotCreateWithoutReferencesInput", {
        isAbstract: true
    })
], SnapshotCreateWithoutReferencesInput);
exports.SnapshotCreateWithoutReferencesInput = SnapshotCreateWithoutReferencesInput;
