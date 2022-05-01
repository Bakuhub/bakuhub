"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateWithoutTimelineInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = class SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateWithoutTimelineInput_1.SupscriptionsOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateWithoutTimelineInput_1.SupscriptionsOnTimelinesUpdateWithoutTimelineInput)
], SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "data", void 0);
SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput);
exports.SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput;
