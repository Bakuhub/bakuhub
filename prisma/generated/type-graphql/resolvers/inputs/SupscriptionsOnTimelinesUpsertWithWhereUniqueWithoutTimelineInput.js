"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateWithoutTimelineInput");
const SupscriptionsOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateWithoutTimelineInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = class SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateWithoutTimelineInput_1.SupscriptionsOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateWithoutTimelineInput_1.SupscriptionsOnTimelinesUpdateWithoutTimelineInput)
], SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateWithoutTimelineInput)
], SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "create", void 0);
SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput);
exports.SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput;
