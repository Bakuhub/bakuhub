"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadCount = class ThreadCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadCount.prototype, "childThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadCount.prototype, "ReactionOnThreads", void 0);
ThreadCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadCount", {
        isAbstract: true
    })
], ThreadCount);
exports.ThreadCount = ThreadCount;
