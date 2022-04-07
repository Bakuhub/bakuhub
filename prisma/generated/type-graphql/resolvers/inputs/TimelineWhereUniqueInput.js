"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TimelineWhereUniqueInput = class TimelineWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineWhereUniqueInput.prototype, "id", void 0);
TimelineWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineWhereUniqueInput", {
        isAbstract: true
    })
], TimelineWhereUniqueInput);
exports.TimelineWhereUniqueInput = TimelineWhereUniqueInput;
