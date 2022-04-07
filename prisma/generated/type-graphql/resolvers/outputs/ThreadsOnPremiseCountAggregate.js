"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnPremiseCountAggregate = class ThreadsOnPremiseCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnPremiseCountAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnPremiseCountAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnPremiseCountAggregate.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnPremiseCountAggregate.prototype, "_all", void 0);
ThreadsOnPremiseCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnPremiseCountAggregate", {
        isAbstract: true
    })
], ThreadsOnPremiseCountAggregate);
exports.ThreadsOnPremiseCountAggregate = ThreadsOnPremiseCountAggregate;
