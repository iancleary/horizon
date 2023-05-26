module.exports = {
  // specify an alternate main src directory, defaults to 'main'
  mainSrcDir: 'main',
  // specify an alternate renderer src directory, defaults to 'renderer'
  rendererSrcDir: 'src',

  // appdir: 'app',
  // This is hardcoded in nextron
  // https://github.com/saltyshiomix/nextron/blob/16c5b30bd8931056dc2380f230354ad759abcfa8/lib/nextron-build.ts#L73-L84

  // main process' webpack config
  webpack: (config, env) => {
    // do some stuff here
    return config;
  },
};
