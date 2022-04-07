"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCreateOrConnectWithoutSnapshotsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateWithoutSnapshotsInput_1 = require("../inputs/ReferenceCreateWithoutSnapshotsInput");
const ReferenceWhereUniqueInput_1 = require("../inputs/ReferenceWhereUniqueInput");
let ReferenceCreateOrConnectWithoutSnapshotsInput = class ReferenceCreateOrConnectWithoutSnapshotsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], ReferenceCreateOrConnectWithoutSnapshotsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateWithoutSnapshotsInput_1.ReferenceCreateWithoutSnapshotsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceCreateWithoutSnapshotsInput_1.ReferenceCreateWithoutSnapshotsInput)
], ReferenceCreateOrConnectWithoutSnapshotsInput.prototype, "create", void 0);
ReferenceCreateOrConnectWithoutSnapshotsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceCreateOrConnectWithoutSnapshotsInput", {
        isAbstract: true
    })
], ReferenceCreateOrConnectWithoutSnapshotsInput);
exports.ReferenceCreateOrConnectWithoutSnapshotsInput = ReferenceCreateOrConnectWithoutSnapshotsInput;
