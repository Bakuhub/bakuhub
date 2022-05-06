"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MergeRequestCount = class MergeRequestCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MergeRequestCount.prototype, "threadsOnMergeRequest", void 0);
MergeRequestCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MergeRequestCount", {
        isAbstract: true
    })
], MergeRequestCount);
exports.MergeRequestCount = MergeRequestCount;
