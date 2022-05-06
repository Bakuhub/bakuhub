"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateManyAuthorInputEnvelope_1 = require("../inputs/TimelineCreateManyAuthorInputEnvelope");
const TimelineCreateOrConnectWithoutAuthorInput_1 = require("../inputs/TimelineCreateOrConnectWithoutAuthorInput");
const TimelineCreateWithoutAuthorInput_1 = require("../inputs/TimelineCreateWithoutAuthorInput");
const TimelineScalarWhereInput_1 = require("../inputs/TimelineScalarWhereInput");
const TimelineUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/TimelineUpdateManyWithWhereWithoutAuthorInput");
const TimelineUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/TimelineUpdateWithWhereUniqueWithoutAuthorInput");
const TimelineUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/TimelineUpsertWithWhereUniqueWithoutAuthorInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpdateManyWithoutAuthorInput = class TimelineUpdateManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineCreateWithoutAuthorInput_1.TimelineCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineCreateOrConnectWithoutAuthorInput_1.TimelineCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineUpsertWithWhereUniqueWithoutAuthorInput_1.TimelineUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateManyAuthorInputEnvelope_1.TimelineCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateManyAuthorInputEnvelope_1.TimelineCreateManyAuthorInputEnvelope)
], TimelineUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineWhereUniqueInput_1.TimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineWhereUniqueInput_1.TimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineWhereUniqueInput_1.TimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineWhereUniqueInput_1.TimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineUpdateWithWhereUniqueWithoutAuthorInput_1.TimelineUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineUpdateManyWithWhereWithoutAuthorInput_1.TimelineUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineScalarWhereInput_1.TimelineScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
TimelineUpdateManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], TimelineUpdateManyWithoutAuthorInput);
exports.TimelineUpdateManyWithoutAuthorInput = TimelineUpdateManyWithoutAuthorInput;
