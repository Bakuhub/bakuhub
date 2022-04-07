"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineWhereInput_1 = require("../../../inputs/TimelineWhereInput");
let DeleteManyTimelineArgs = class DeleteManyTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], DeleteManyTimelineArgs.prototype, "where", void 0);
DeleteManyTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTimelineArgs);
exports.DeleteManyTimelineArgs = DeleteManyTimelineArgs;
