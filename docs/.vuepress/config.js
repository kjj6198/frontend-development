const fs = require('fs');
const path = require('path');

const routes = [
  ['javascript-basic', 'JavaScript 基礎'],
  ['frontend-engineering', '前端工程化'],
  ['frontend-ui-development', '前端 UI 開發'],
  ['browser-javascript', '瀏覽器 JavaScript'],
  ['advanced', '進階篇'],
  ['security', '前端安全性'],
  ['others', '番外篇']
].map((setting) => {
  const p = setting[0];
  const title = setting[1];
  const filePath = path.resolve(__dirname, '..', p);
  return {
    title: title,
    collapsable: false,
    children: fs.readdirSync(filePath).filter(f => f !== '.DS_Store').map(t => {
      const content = fs.readFileSync(path.join(filePath, t)).toString('utf-8');
      const match = content.match(/\#{1}\s+(.+)/);
  
      if (match) {
        return p + '/' + t.replace('.md', '')
      }

      return t
    })
  }
})

module.exports = {
  plugins: [
    ['vuepress-plugin-mathjax', { target: 'svg', showError: true }]
  ],
  title: '深入現代前端開發',
  description: '',
  themeConfig: {
    sidebar: routes,
  }
}