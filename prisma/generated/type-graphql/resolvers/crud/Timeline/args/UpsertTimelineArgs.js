"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateInput_1 = require("../../../inputs/TimelineCreateInput");
const TimelineUpdateInput_1 = require("../../../inputs/TimelineUpdateInput");
const TimelineWhereUniqueInput_1 = require("../../../inputs/TimelineWhereUniqueInput");
let UpsertTimelineArgs = class UpsertTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], UpsertTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateInput_1.TimelineCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateInput_1.TimelineCreateInput)
], UpsertTimelineArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateInput_1.TimelineUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateInput_1.TimelineUpdateInput)
], UpsertTimelineArgs.prototype, "update", void 0);
UpsertTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTimelineArgs);
exports.UpsertTimelineArgs = UpsertTimelineArgs;
