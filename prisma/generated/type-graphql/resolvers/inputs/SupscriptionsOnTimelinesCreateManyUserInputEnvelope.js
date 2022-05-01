"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateManyUserInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateManyUserInput");
let SupscriptionsOnTimelinesCreateManyUserInputEnvelope = class SupscriptionsOnTimelinesCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateManyUserInput_1.SupscriptionsOnTimelinesCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SupscriptionsOnTimelinesCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
SupscriptionsOnTimelinesCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateManyUserInputEnvelope);
exports.SupscriptionsOnTimelinesCreateManyUserInputEnvelope = SupscriptionsOnTimelinesCreateManyUserInputEnvelope;
