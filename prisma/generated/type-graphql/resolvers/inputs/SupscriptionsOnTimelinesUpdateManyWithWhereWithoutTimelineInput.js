"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesScalarWhereInput_1 = require("../inputs/SupscriptionsOnTimelinesScalarWhereInput");
const SupscriptionsOnTimelinesUpdateManyMutationInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateManyMutationInput");
let SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = class SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesScalarWhereInput_1.SupscriptionsOnTimelinesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesScalarWhereInput_1.SupscriptionsOnTimelinesScalarWhereInput)
], SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateManyMutationInput_1.SupscriptionsOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateManyMutationInput_1.SupscriptionsOnTimelinesUpdateManyMutationInput)
], SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput.prototype, "data", void 0);
SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput);
exports.SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = SupscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput;
