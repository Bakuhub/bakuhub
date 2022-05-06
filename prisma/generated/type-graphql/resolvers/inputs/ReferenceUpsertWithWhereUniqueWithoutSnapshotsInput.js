"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateWithoutSnapshotsInput_1 = require("../inputs/ReferenceCreateWithoutSnapshotsInput");
const ReferenceUpdateWithoutSnapshotsInput_1 = require("../inputs/ReferenceUpdateWithoutSnapshotsInput");
const ReferenceWhereUniqueInput_1 = require("../inputs/ReferenceWhereUniqueInput");
let ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput = class ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateWithoutSnapshotsInput_1.ReferenceUpdateWithoutSnapshotsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateWithoutSnapshotsInput_1.ReferenceUpdateWithoutSnapshotsInput)
], ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateWithoutSnapshotsInput_1.ReferenceCreateWithoutSnapshotsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceCreateWithoutSnapshotsInput_1.ReferenceCreateWithoutSnapshotsInput)
], ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput.prototype, "create", void 0);
ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput", {
        isAbstract: true
    })
], ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput);
exports.ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput = ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput;
