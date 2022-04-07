"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCountAggregate_1 = require("../outputs/ThreadCountAggregate");
const ThreadMaxAggregate_1 = require("../outputs/ThreadMaxAggregate");
const ThreadMinAggregate_1 = require("../outputs/ThreadMinAggregate");
let ThreadGroupBy = class ThreadGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadGroupBy.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadGroupBy.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadGroupBy.prototype, "parentThreadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCountAggregate_1.ThreadCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCountAggregate_1.ThreadCountAggregate)
], ThreadGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadMinAggregate_1.ThreadMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadMinAggregate_1.ThreadMinAggregate)
], ThreadGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadMaxAggregate_1.ThreadMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadMaxAggregate_1.ThreadMaxAggregate)
], ThreadGroupBy.prototype, "_max", void 0);
ThreadGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadGroupBy", {
        isAbstract: true
    })
], ThreadGroupBy);
exports.ThreadGroupBy = ThreadGroupBy;
