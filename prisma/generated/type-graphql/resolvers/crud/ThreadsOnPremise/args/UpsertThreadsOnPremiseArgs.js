"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateInput_1 = require("../../../inputs/ThreadsOnPremiseCreateInput");
const ThreadsOnPremiseUpdateInput_1 = require("../../../inputs/ThreadsOnPremiseUpdateInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../../../inputs/ThreadsOnPremiseWhereUniqueInput");
let UpsertThreadsOnPremiseArgs = class UpsertThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], UpsertThreadsOnPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateInput_1.ThreadsOnPremiseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateInput_1.ThreadsOnPremiseCreateInput)
], UpsertThreadsOnPremiseArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateInput_1.ThreadsOnPremiseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateInput_1.ThreadsOnPremiseUpdateInput)
], UpsertThreadsOnPremiseArgs.prototype, "update", void 0);
UpsertThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertThreadsOnPremiseArgs);
exports.UpsertThreadsOnPremiseArgs = UpsertThreadsOnPremiseArgs;
