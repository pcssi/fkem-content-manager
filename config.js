System.config({
	baseUrl: '/',
	transpiler: 'typescript',
	typescriptOptions: {
		"emitDecoratorMetadata": true
	},
	packages: {
		'app': {
			'defaultExtension': 'ts',
			'main': 'main.ts'
		}
	}
});