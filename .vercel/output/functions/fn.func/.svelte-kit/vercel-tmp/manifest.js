export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.a6b68382.js","app":"_app/immutable/entry/app.3bec2dd8.js","imports":["_app/immutable/entry/start.a6b68382.js","_app/immutable/chunks/scheduler.d3678df4.js","_app/immutable/chunks/singletons.b2cfb3a0.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.3bec2dd8.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.d3678df4.js","_app/immutable/chunks/index.d932291b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
