module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components',
          config: './src/config',
          constants: './src/constants',
          interfaces: './src/interfaces',
          managers: './src/managers',
          screens: './src/screens',
          services: './src/services',
          states: './src/states',
          utils: './src/utils',
        },
      },
    ],
  ],
};
