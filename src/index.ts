import { initEmbedManager } from "logi-embed";

// This code is do demonstrate typescript compile issue
initEmbedManager({ getToken: () => Promise.reject() }, '');
