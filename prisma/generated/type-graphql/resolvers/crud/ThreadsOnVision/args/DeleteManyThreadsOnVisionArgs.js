"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionWhereInput_1 = require("../../../inputs/ThreadsOnVisionWhereInput");
let DeleteManyThreadsOnVisionArgs = class DeleteManyThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], DeleteManyThreadsOnVisionArgs.prototype, "where", void 0);
DeleteManyThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyThreadsOnVisionArgs);
exports.DeleteManyThreadsOnVisionArgs = DeleteManyThreadsOnVisionArgs;
