"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope");
const SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput");
const SupscriptionsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateWithoutTimelineInput");
const SupscriptionsOnTimelinesScalarWhereInput_1 = require("../inputs/SupscriptionsOnTimelinesScalarWhereInput");
const SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput");
const SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput");
const SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput = class SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1.SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1.SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1.SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1.SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1.SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesScalarWhereInput_1.SupscriptionsOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "deleteMany", void 0);
SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput);
exports.SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput = SupscriptionsOnTimelinesUpdateManyWithoutTimelineInput;
