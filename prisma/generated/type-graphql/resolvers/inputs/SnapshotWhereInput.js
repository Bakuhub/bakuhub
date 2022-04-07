"use strict";
var SnapshotWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ReferenceListRelationFilter_1 = require("../inputs/ReferenceListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let SnapshotWhereInput = SnapshotWhereInput_1 = class SnapshotWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SnapshotWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SnapshotWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SnapshotWhereInput.prototype, "versionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SnapshotWhereInput.prototype, "s3Url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SnapshotWhereInput.prototype, "sourceUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SnapshotWhereInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceListRelationFilter_1.ReferenceListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceListRelationFilter_1.ReferenceListRelationFilter)
], SnapshotWhereInput.prototype, "references", void 0);
SnapshotWhereInput = SnapshotWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotWhereInput", {
        isAbstract: true
    })
], SnapshotWhereInput);
exports.SnapshotWhereInput = SnapshotWhereInput;
