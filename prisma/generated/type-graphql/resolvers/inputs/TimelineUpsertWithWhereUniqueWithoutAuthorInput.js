"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutAuthorInput_1 = require("../inputs/TimelineCreateWithoutAuthorInput");
const TimelineUpdateWithoutAuthorInput_1 = require("../inputs/TimelineUpdateWithoutAuthorInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpsertWithWhereUniqueWithoutAuthorInput = class TimelineUpsertWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutAuthorInput_1.TimelineUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutAuthorInput_1.TimelineUpdateWithoutAuthorInput)
], TimelineUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutAuthorInput_1.TimelineCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutAuthorInput_1.TimelineCreateWithoutAuthorInput)
], TimelineUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
TimelineUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpsertWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], TimelineUpsertWithWhereUniqueWithoutAuthorInput);
exports.TimelineUpsertWithWhereUniqueWithoutAuthorInput = TimelineUpsertWithWhereUniqueWithoutAuthorInput;
