module.exports = {
	entry: {
		index: {
			import: './src/pages/index.ts',
		},
		columbus: {
			dependOn: 'index',
			import: './src/pages/columbus.ts',
		},
		metro: {
			dependOn: 'index',
			import: './src/pages/metro.ts',
		},
		ohio: {
			dependOn: 'index',
			import: './src/pages/ohio.ts',
		},
		federal: {
			dependOn: 'index',
			import: './src/pages/federal.ts',
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
