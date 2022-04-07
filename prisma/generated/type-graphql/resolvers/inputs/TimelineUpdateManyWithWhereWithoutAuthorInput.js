"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineScalarWhereInput_1 = require("../inputs/TimelineScalarWhereInput");
const TimelineUpdateManyMutationInput_1 = require("../inputs/TimelineUpdateManyMutationInput");
let TimelineUpdateManyWithWhereWithoutAuthorInput = class TimelineUpdateManyWithWhereWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineScalarWhereInput_1.TimelineScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineScalarWhereInput_1.TimelineScalarWhereInput)
], TimelineUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateManyMutationInput_1.TimelineUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateManyMutationInput_1.TimelineUpdateManyMutationInput)
], TimelineUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
TimelineUpdateManyWithWhereWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateManyWithWhereWithoutAuthorInput", {
        isAbstract: true
    })
], TimelineUpdateManyWithWhereWithoutAuthorInput);
exports.TimelineUpdateManyWithWhereWithoutAuthorInput = TimelineUpdateManyWithWhereWithoutAuthorInput;
