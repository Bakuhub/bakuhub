"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateInput_1 = require("../../../inputs/ThreadCreateInput");
const ThreadUpdateInput_1 = require("../../../inputs/ThreadUpdateInput");
const ThreadWhereUniqueInput_1 = require("../../../inputs/ThreadWhereUniqueInput");
let UpsertThreadArgs = class UpsertThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], UpsertThreadArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateInput_1.ThreadCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateInput_1.ThreadCreateInput)
], UpsertThreadArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateInput_1.ThreadUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateInput_1.ThreadUpdateInput)
], UpsertThreadArgs.prototype, "update", void 0);
UpsertThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertThreadArgs);
exports.UpsertThreadArgs = UpsertThreadArgs;
