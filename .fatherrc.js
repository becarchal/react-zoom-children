export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  preCommit: {
    eslint: true,
    prettier: true,
  },
  doc: {
    themeConfig: { mode: 'dark' },
    base: '/react-zoom-children'
  },
};