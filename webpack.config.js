module.exports = {
	entry: {
		index: {
			import: './src/pages/index.ts',
		},
		columbus: {
			dependOn: 'index',
			import: './src/pages/columbus.ts',
		},
		'franklin-county': {
			dependOn: 'index',
			import: './src/pages/franklin_county.ts',
		},
		metro: {
			dependOn: 'index',
			import: './src/pages/metro.ts',
		},
		ohio: {
			dependOn: 'index',
			import: './src/pages/ohio.ts',
		},
		'special-districts': {
			dependOn: 'index',
			import: './src/pages/special_districts.ts',
		},
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: "sass-loader",
						options: {
							api: "modern",
							sassOptions: {},
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
}
