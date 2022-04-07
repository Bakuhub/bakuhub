"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnPremiseCreateManyInput = class ThreadsOnPremiseCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseCreateManyInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseCreateManyInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnPremiseCreateManyInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateManyInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateManyInput);
exports.ThreadsOnPremiseCreateManyInput = ThreadsOnPremiseCreateManyInput;
