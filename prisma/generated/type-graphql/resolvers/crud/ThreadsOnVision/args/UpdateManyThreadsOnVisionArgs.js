"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionUpdateManyMutationInput_1 = require("../../../inputs/ThreadsOnVisionUpdateManyMutationInput");
const ThreadsOnVisionWhereInput_1 = require("../../../inputs/ThreadsOnVisionWhereInput");
let UpdateManyThreadsOnVisionArgs = class UpdateManyThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyMutationInput_1.ThreadsOnVisionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateManyMutationInput_1.ThreadsOnVisionUpdateManyMutationInput)
], UpdateManyThreadsOnVisionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], UpdateManyThreadsOnVisionArgs.prototype, "where", void 0);
UpdateManyThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyThreadsOnVisionArgs);
exports.UpdateManyThreadsOnVisionArgs = UpdateManyThreadsOnVisionArgs;
