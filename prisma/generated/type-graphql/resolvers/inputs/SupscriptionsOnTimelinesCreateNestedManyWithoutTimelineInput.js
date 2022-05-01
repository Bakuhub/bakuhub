"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope");
const SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput");
const SupscriptionsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateWithoutTimelineInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput = class SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1.SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1.SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope)
], SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connect", void 0);
SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput);
exports.SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput = SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput;
