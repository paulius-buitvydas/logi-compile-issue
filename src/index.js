"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logi_embed_1 = require("logi-embed");
// This code is do demonstrate typescript compile issue
(0, logi_embed_1.initEmbedManager)({ getToken: () => Promise.reject() }, '');
