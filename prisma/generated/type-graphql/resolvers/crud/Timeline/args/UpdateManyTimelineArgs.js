"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineUpdateManyMutationInput_1 = require("../../../inputs/TimelineUpdateManyMutationInput");
const TimelineWhereInput_1 = require("../../../inputs/TimelineWhereInput");
let UpdateManyTimelineArgs = class UpdateManyTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateManyMutationInput_1.TimelineUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateManyMutationInput_1.TimelineUpdateManyMutationInput)
], UpdateManyTimelineArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], UpdateManyTimelineArgs.prototype, "where", void 0);
UpdateManyTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTimelineArgs);
exports.UpdateManyTimelineArgs = UpdateManyTimelineArgs;
