"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateManyPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnPremiseCreateManyPremiseInput = class ThreadsOnPremiseCreateManyPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseCreateManyPremiseInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnPremiseCreateManyPremiseInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseCreateManyPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateManyPremiseInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateManyPremiseInput);
exports.ThreadsOnPremiseCreateManyPremiseInput = ThreadsOnPremiseCreateManyPremiseInput;
