"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateManyInput_1 = require("../../../inputs/TimelineCreateManyInput");
let CreateManyTimelineArgs = class CreateManyTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineCreateManyInput_1.TimelineCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTimelineArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTimelineArgs.prototype, "skipDuplicates", void 0);
CreateManyTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTimelineArgs);
exports.CreateManyTimelineArgs = CreateManyTimelineArgs;
