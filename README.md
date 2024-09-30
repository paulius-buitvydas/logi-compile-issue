# Logi Embed Typescript compile issue

To reproduce run `npm run build`

Typescript will output errors like

```
node_modules/logi-embed/EmbedManager.ts:56:5 - error TS2564: Property 'mutationObserver' has no initializer and is not definitely assigned in the constructor.

56     mutationObserver: MutationObserver;
       ~~~~~~~~~~~~~~~~

node_modules/logi-embed/EmbedManager.ts:601:39 - error TS1503: Named capturing groups are only available when targeting 'ES2018' or later.

601         const zoomdataUrlPattern = /(?<base>.*?)\/(?:js|misc|embed)\/embed\.js(?:\/|\?|)(?<params>.*)/i;
                                          ~~~~~~

node_modules/logi-embed/EmbedManager.ts:601:91 - error TS1503: Named capturing groups are only available when targeting 'ES2018' or later.

601         const zoomdataUrlPattern = /(?<base>.*?)\/(?:js|misc|embed)\/embed\.js(?:\/|\?|)(?<params>.*)/i;
                                                                                              ~~~~~~~~


Found 3 errors in the same file, starting at: node_modules/logi-embed/EmbedManager.ts:56
```
