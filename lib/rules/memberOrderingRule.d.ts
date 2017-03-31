/**
 * @license
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as ts from "typescript";
import * as Lint from "../index";
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: Lint.IRuleMetadata;
    static FAILURE_STRING_ALPHABETIZE(prevName: string, curName: string): string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
export declare class MemberOrderingWalker extends Lint.RuleWalker {
    private readonly opts;
    constructor(sourceFile: ts.SourceFile, options: Lint.IOptions);
    visitClassDeclaration(node: ts.ClassDeclaration): void;
    visitClassExpression(node: ts.ClassExpression): void;
    visitInterfaceDeclaration(node: ts.InterfaceDeclaration): void;
    visitTypeLiteral(node: ts.TypeLiteralNode): void;
    private visitMembers(members);
    /** Finds the lowest name higher than 'targetName'. */
    private findLowerName(members, targetRank, targetName);
    /** Finds the highest existing rank lower than `targetRank`. */
    private findLowerRank(members, targetRank);
    private memberRank(member);
    private rankName(rank);
}
