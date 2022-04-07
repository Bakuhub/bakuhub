"use strict";
var ReferenceWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotListRelationFilter_1 = require("../inputs/SnapshotListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const VisionListRelationFilter_1 = require("../inputs/VisionListRelationFilter");
let ReferenceWhereInput = ReferenceWhereInput_1 = class ReferenceWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReferenceWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotListRelationFilter_1.SnapshotListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotListRelationFilter_1.SnapshotListRelationFilter)
], ReferenceWhereInput.prototype, "snapshots", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionListRelationFilter_1.VisionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionListRelationFilter_1.VisionListRelationFilter)
], ReferenceWhereInput.prototype, "Vision", void 0);
ReferenceWhereInput = ReferenceWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceWhereInput", {
        isAbstract: true
    })
], ReferenceWhereInput);
exports.ReferenceWhereInput = ReferenceWhereInput;
