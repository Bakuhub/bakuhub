"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateInput_1 = require("../../../inputs/ThreadsOnTimelineCreateInput");
let CreateThreadsOnTimelineArgs = class CreateThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateInput_1.ThreadsOnTimelineCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateInput_1.ThreadsOnTimelineCreateInput)
], CreateThreadsOnTimelineArgs.prototype, "data", void 0);
CreateThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateThreadsOnTimelineArgs);
exports.CreateThreadsOnTimelineArgs = CreateThreadsOnTimelineArgs;
