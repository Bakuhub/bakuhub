"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let MergeRequestCreateManyInput = class MergeRequestCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateManyInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateManyInput.prototype, "visionId", void 0);
MergeRequestCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestCreateManyInput", {
        isAbstract: true
    })
], MergeRequestCreateManyInput);
exports.MergeRequestCreateManyInput = MergeRequestCreateManyInput;
