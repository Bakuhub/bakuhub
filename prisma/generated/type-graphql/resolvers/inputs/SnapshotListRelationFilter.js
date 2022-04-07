"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotWhereInput_1 = require("../inputs/SnapshotWhereInput");
let SnapshotListRelationFilter = class SnapshotListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereInput_1.SnapshotWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereInput_1.SnapshotWhereInput)
], SnapshotListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereInput_1.SnapshotWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereInput_1.SnapshotWhereInput)
], SnapshotListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereInput_1.SnapshotWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereInput_1.SnapshotWhereInput)
], SnapshotListRelationFilter.prototype, "none", void 0);
SnapshotListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotListRelationFilter", {
        isAbstract: true
    })
], SnapshotListRelationFilter);
exports.SnapshotListRelationFilter = SnapshotListRelationFilter;
