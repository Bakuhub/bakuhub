"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput");
const SubscriptionsOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateWithoutTimelineInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = class SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateWithoutTimelineInput)
], SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateWithoutTimelineInput)
], SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "create", void 0);
SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput);
exports.SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput;
