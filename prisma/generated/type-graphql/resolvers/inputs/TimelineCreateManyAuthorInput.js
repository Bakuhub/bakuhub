"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateManyAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TimelineCreateManyAuthorInput = class TimelineCreateManyAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateManyAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateManyAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateManyAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateManyAuthorInput.prototype, "status", void 0);
TimelineCreateManyAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateManyAuthorInput", {
        isAbstract: true
    })
], TimelineCreateManyAuthorInput);
exports.TimelineCreateManyAuthorInput = TimelineCreateManyAuthorInput;
