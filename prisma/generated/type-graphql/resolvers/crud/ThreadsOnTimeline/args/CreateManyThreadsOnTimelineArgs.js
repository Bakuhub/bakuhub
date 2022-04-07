"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateManyInput_1 = require("../../../inputs/ThreadsOnTimelineCreateManyInput");
let CreateManyThreadsOnTimelineArgs = class CreateManyThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateManyInput_1.ThreadsOnTimelineCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyThreadsOnTimelineArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyThreadsOnTimelineArgs.prototype, "skipDuplicates", void 0);
CreateManyThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyThreadsOnTimelineArgs);
exports.CreateManyThreadsOnTimelineArgs = CreateManyThreadsOnTimelineArgs;
