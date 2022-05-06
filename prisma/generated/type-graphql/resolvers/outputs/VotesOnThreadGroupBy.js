"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadAvgAggregate_1 = require("../outputs/VotesOnThreadAvgAggregate");
const VotesOnThreadCountAggregate_1 = require("../outputs/VotesOnThreadCountAggregate");
const VotesOnThreadMaxAggregate_1 = require("../outputs/VotesOnThreadMaxAggregate");
const VotesOnThreadMinAggregate_1 = require("../outputs/VotesOnThreadMinAggregate");
const VotesOnThreadSumAggregate_1 = require("../outputs/VotesOnThreadSumAggregate");
let VotesOnThreadGroupBy = class VotesOnThreadGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadGroupBy.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadGroupBy.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCountAggregate_1.VotesOnThreadCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCountAggregate_1.VotesOnThreadCountAggregate)
], VotesOnThreadGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadAvgAggregate_1.VotesOnThreadAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadAvgAggregate_1.VotesOnThreadAvgAggregate)
], VotesOnThreadGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadSumAggregate_1.VotesOnThreadSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadSumAggregate_1.VotesOnThreadSumAggregate)
], VotesOnThreadGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadMinAggregate_1.VotesOnThreadMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadMinAggregate_1.VotesOnThreadMinAggregate)
], VotesOnThreadGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadMaxAggregate_1.VotesOnThreadMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadMaxAggregate_1.VotesOnThreadMaxAggregate)
], VotesOnThreadGroupBy.prototype, "_max", void 0);
VotesOnThreadGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnThreadGroupBy", {
        isAbstract: true
    })
], VotesOnThreadGroupBy);
exports.VotesOnThreadGroupBy = VotesOnThreadGroupBy;
