"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineUpdateWithoutAuthorInput_1 = require("../inputs/TimelineUpdateWithoutAuthorInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpdateWithWhereUniqueWithoutAuthorInput = class TimelineUpdateWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutAuthorInput_1.TimelineUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutAuthorInput_1.TimelineUpdateWithoutAuthorInput)
], TimelineUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
TimelineUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], TimelineUpdateWithWhereUniqueWithoutAuthorInput);
exports.TimelineUpdateWithWhereUniqueWithoutAuthorInput = TimelineUpdateWithWhereUniqueWithoutAuthorInput;
