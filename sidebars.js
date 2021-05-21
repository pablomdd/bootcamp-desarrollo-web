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
        'week1/02-html',
        'week1/03-exercise',
        'week1/04-css',
        // { 'week1': ['week1/01-introduction'] }
        // {
        //   type: 'doc',
        //   dirName: 'week1', // generate sidebar slice from the docs folder (or versioned_docs/<version>)
        // },
      ]
    },
    {

      type: 'category',
      label: 'Markdown',
      items: [
        'doc1', 'doc2',
      ]
    }
  ]
};
