"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnPremiseMinAggregate = class ThreadsOnPremiseMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseMinAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseMinAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnPremiseMinAggregate.prototype, "assignedAt", void 0);
ThreadsOnPremiseMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnPremiseMinAggregate", {
        isAbstract: true
    })
], ThreadsOnPremiseMinAggregate);
exports.ThreadsOnPremiseMinAggregate = ThreadsOnPremiseMinAggregate;
