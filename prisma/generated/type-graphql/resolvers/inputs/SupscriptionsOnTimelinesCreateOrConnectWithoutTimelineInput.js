"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateWithoutTimelineInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput = class SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateWithoutTimelineInput)
], SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "create", void 0);
SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput);
exports.SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput = SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput;
