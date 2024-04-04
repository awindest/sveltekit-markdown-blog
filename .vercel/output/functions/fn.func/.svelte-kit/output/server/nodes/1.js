

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.db111c68.js","_app/immutable/chunks/scheduler.d3678df4.js","_app/immutable/chunks/index.d932291b.js","_app/immutable/chunks/stores.75759feb.js","_app/immutable/chunks/singletons.f56d51fa.js"];
export const stylesheets = ["_app/immutable/assets/1.f870a4f1.css"];
export const fonts = [];
