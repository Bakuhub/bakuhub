"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateInput_1 = require("../../../inputs/ThreadsOnVisionCreateInput");
let CreateThreadsOnVisionArgs = class CreateThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateInput_1.ThreadsOnVisionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateInput_1.ThreadsOnVisionCreateInput)
], CreateThreadsOnVisionArgs.prototype, "data", void 0);
CreateThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateThreadsOnVisionArgs);
exports.CreateThreadsOnVisionArgs = CreateThreadsOnVisionArgs;
