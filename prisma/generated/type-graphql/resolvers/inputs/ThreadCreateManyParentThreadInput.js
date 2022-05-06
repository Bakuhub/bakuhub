"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateManyParentThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadCreateManyParentThreadInput = class ThreadCreateManyParentThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateManyParentThreadInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateManyParentThreadInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadCreateManyParentThreadInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateManyParentThreadInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadCreateManyParentThreadInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadCreateManyParentThreadInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateManyParentThreadInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadCreateManyParentThreadInput.prototype, "authorId", void 0);
ThreadCreateManyParentThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateManyParentThreadInput", {
        isAbstract: true
    })
], ThreadCreateManyParentThreadInput);
exports.ThreadCreateManyParentThreadInput = ThreadCreateManyParentThreadInput;
