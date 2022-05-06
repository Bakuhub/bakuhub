"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionUpdateInput_1 = require("../../../inputs/ThreadsOnVisionUpdateInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../../../inputs/ThreadsOnVisionWhereUniqueInput");
let UpdateThreadsOnVisionArgs = class UpdateThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateInput_1.ThreadsOnVisionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateInput_1.ThreadsOnVisionUpdateInput)
], UpdateThreadsOnVisionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], UpdateThreadsOnVisionArgs.prototype, "where", void 0);
UpdateThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateThreadsOnVisionArgs);
exports.UpdateThreadsOnVisionArgs = UpdateThreadsOnVisionArgs;
