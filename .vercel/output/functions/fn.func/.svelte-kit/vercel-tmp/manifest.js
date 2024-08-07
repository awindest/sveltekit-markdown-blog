export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Syncthing-Logo.svg","favicon.png","gemini_sparkle.svg","keywestsunset.avif","knime-titanic-data-science/header.png","pockethost.avif"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.59784b8d.js","app":"_app/immutable/entry/app.46681e3a.js","imports":["_app/immutable/entry/start.59784b8d.js","_app/immutable/chunks/scheduler.d3678df4.js","_app/immutable/chunks/singletons.98927937.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.46681e3a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.d3678df4.js","_app/immutable/chunks/index.d932291b.js"],"stylesheets":[],"fonts":[]},
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
