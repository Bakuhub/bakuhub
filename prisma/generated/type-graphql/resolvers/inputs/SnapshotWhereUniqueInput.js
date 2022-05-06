"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SnapshotWhereUniqueInput = class SnapshotWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotWhereUniqueInput.prototype, "id", void 0);
SnapshotWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotWhereUniqueInput", {
        isAbstract: true
    })
], SnapshotWhereUniqueInput);
exports.SnapshotWhereUniqueInput = SnapshotWhereUniqueInput;
