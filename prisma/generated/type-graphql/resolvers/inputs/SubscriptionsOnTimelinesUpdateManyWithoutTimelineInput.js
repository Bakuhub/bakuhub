"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope");
const SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput");
const SubscriptionsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput");
const SubscriptionsOnTimelinesScalarWhereInput_1 = require("../inputs/SubscriptionsOnTimelinesScalarWhereInput");
const SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput");
const SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput");
const SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput = class SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1.SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1.SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1.SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput_1.SubscriptionsOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput.prototype, "deleteMany", void 0);
SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput);
exports.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput = SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput;
