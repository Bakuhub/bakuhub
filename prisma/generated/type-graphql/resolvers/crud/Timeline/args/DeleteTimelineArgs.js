"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineWhereUniqueInput_1 = require("../../../inputs/TimelineWhereUniqueInput");
let DeleteTimelineArgs = class DeleteTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], DeleteTimelineArgs.prototype, "where", void 0);
DeleteTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTimelineArgs);
exports.DeleteTimelineArgs = DeleteTimelineArgs;
