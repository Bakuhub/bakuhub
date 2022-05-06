"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequest = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestStatus_1 = require("../enums/MergeRequestStatus");
const MergeRequestCount_1 = require("../resolvers/outputs/MergeRequestCount");
let MergeRequest = class MergeRequest {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequest.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequest.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequest.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequest.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequest.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCount_1.MergeRequestCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCount_1.MergeRequestCount)
], MergeRequest.prototype, "_count", void 0);
MergeRequest = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MergeRequest", {
        isAbstract: true
    })
], MergeRequest);
exports.MergeRequest = MergeRequest;
