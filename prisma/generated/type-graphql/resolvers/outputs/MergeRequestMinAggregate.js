"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let MergeRequestMinAggregate = class MergeRequestMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMinAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMinAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMinAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMinAggregate.prototype, "visionId", void 0);
MergeRequestMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MergeRequestMinAggregate", {
        isAbstract: true
    })
], MergeRequestMinAggregate);
exports.MergeRequestMinAggregate = MergeRequestMinAggregate;
