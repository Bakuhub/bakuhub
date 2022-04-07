"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremise = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnPremise = class ThreadsOnPremise {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremise.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremise.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnPremise.prototype, "assignedAt", void 0);
ThreadsOnPremise = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnPremise", {
        isAbstract: true
    })
], ThreadsOnPremise);
exports.ThreadsOnPremise = ThreadsOnPremise;
