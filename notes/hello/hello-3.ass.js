"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operand_1 = require("../../x86/operand");
var code_1 = require("../../x86/x64/code");
var StaticBuffer = require('../../../static-buffer/buffer').StaticBuffer;
var _ = code_1.Code.create('hello_world_app');
var SYS_write = 1;
var STDOUT = 1;
var str = 'Hello World!\n';
var db = _.db(str);
_._('mov', [operand_1.rax, SYS_write]);
_._('mov', [operand_1.rdi, STDOUT]);
_._('lea', [operand_1.rsi, operand_1.rip.disp(db)]);
_._('mov', [operand_1.rdx, str.length]);
_._('syscall');
_._('ret');
var bin = _.compile();
console.log(_.toString());
StaticBuffer.from(bin, 'rwe').call([], 13);