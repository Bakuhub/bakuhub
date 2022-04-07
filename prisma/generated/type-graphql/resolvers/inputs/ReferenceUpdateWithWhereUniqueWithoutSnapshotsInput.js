"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceUpdateWithoutSnapshotsInput_1 = require("../inputs/ReferenceUpdateWithoutSnapshotsInput");
const ReferenceWhereUniqueInput_1 = require("../inputs/ReferenceWhereUniqueInput");
let ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput = class ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateWithoutSnapshotsInput_1.ReferenceUpdateWithoutSnapshotsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateWithoutSnapshotsInput_1.ReferenceUpdateWithoutSnapshotsInput)
], ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput.prototype, "data", void 0);
ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput", {
        isAbstract: true
    })
], ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput);
exports.ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput = ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput;
