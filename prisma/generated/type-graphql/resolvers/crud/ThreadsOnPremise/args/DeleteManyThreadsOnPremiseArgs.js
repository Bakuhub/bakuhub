"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseWhereInput_1 = require("../../../inputs/ThreadsOnPremiseWhereInput");
let DeleteManyThreadsOnPremiseArgs = class DeleteManyThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], DeleteManyThreadsOnPremiseArgs.prototype, "where", void 0);
DeleteManyThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyThreadsOnPremiseArgs);
exports.DeleteManyThreadsOnPremiseArgs = DeleteManyThreadsOnPremiseArgs;
