"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineUpdateInput_1 = require("../../../inputs/TimelineUpdateInput");
const TimelineWhereUniqueInput_1 = require("../../../inputs/TimelineWhereUniqueInput");
let UpdateTimelineArgs = class UpdateTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateInput_1.TimelineUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateInput_1.TimelineUpdateInput)
], UpdateTimelineArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], UpdateTimelineArgs.prototype, "where", void 0);
UpdateTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTimelineArgs);
exports.UpdateTimelineArgs = UpdateTimelineArgs;
