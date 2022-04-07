"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateManyInput_1 = require("../../../inputs/ThreadsOnVisionCreateManyInput");
let CreateManyThreadsOnVisionArgs = class CreateManyThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionCreateManyInput_1.ThreadsOnVisionCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyThreadsOnVisionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyThreadsOnVisionArgs.prototype, "skipDuplicates", void 0);
CreateManyThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyThreadsOnVisionArgs);
exports.CreateManyThreadsOnVisionArgs = CreateManyThreadsOnVisionArgs;
