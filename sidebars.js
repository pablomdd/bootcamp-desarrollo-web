module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Inicio',
      items: ['welcome', 'curriculum', 'requisites', 'homework', 'graduation',]
    },
    {
      type: 'category',
      label: 'Semana 1',
      items: [
        'week1/01-introduction',
        'week1/02-html-css',
        'week1/03-knowing-html',
        'week1/04-knowing-css',
        'week1/05-challenge',
        // { 'week1': ['week1/01-introduction'] }
        // {
        //   type: 'doc',
        //   dirName: 'week1', // generate sidebar slice from the docs folder (or versioned_docs/<version>)
        // },
      ]
    },
    {
      type: 'category',
      label: 'Semana 2',
      items: [
        'week2/01-intro-week2',
        'week2/02-specificity',
        'week2/03-box-model',
        // 'week2/04-positioning',
        'week2/05-fonts',
        'week2/06-backgrounds',
        'week2/07-flexbox',
        'week2/08-week2-practice',
        'week2/09-week2-challenge',
      ]
    },
    // {

    //   type: 'category',
    //   label: 'Markdown',
    //   items: [
    //     'doc1', 'doc2',
    //   ]
    // }
  ]
};
