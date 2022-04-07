"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionWhereUniqueInput_1 = require("../../../inputs/ThreadsOnVisionWhereUniqueInput");
let FindUniqueThreadsOnVisionArgs = class FindUniqueThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], FindUniqueThreadsOnVisionArgs.prototype, "where", void 0);
FindUniqueThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueThreadsOnVisionArgs);
exports.FindUniqueThreadsOnVisionArgs = FindUniqueThreadsOnVisionArgs;
