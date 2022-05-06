"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateInput_1 = require("../../../inputs/TimelineCreateInput");
let CreateTimelineArgs = class CreateTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateInput_1.TimelineCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateInput_1.TimelineCreateInput)
], CreateTimelineArgs.prototype, "data", void 0);
CreateTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTimelineArgs);
exports.CreateTimelineArgs = CreateTimelineArgs;
