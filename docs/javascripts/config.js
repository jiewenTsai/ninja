// 專門處理 Colab 轉過來的數學公式
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',
    // 處理 Colab 的轉義問題
    macros: {
      "\\RR": "\\mathbb{R}",
      "\\bold": ["\\mathbf{#1}", 1]
    }
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  },
  startup: {
    ready: function () {
      MathJax.startup.defaultReady();
      // 處理動態載入的內容
      MathJax.startup.promise.then(function () {
        console.log('MathJax 初始化完成');
      });
    }
  }
};

// 確保在頁面更新時重新渲染數學公式
document$.subscribe(() => { 
  if (typeof MathJax !== "undefined") {
    MathJax.typesetPromise();
  }
});
