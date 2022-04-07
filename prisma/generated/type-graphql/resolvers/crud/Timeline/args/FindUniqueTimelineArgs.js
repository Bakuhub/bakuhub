"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineWhereUniqueInput_1 = require("../../../inputs/TimelineWhereUniqueInput");
let FindUniqueTimelineArgs = class FindUniqueTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], FindUniqueTimelineArgs.prototype, "where", void 0);
FindUniqueTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTimelineArgs);
exports.FindUniqueTimelineArgs = FindUniqueTimelineArgs;
