export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fad0ef108fcc4a2ad248c6e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a2qch9cv',
                  apiId: '3773e3af-9088-4750-98be-48e662a139a3'
                },
                {
                  buildHookId: '5fad0ef17f547a92e1b566a8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p7jwayop',
                  apiId: 'c10563fd-3ea8-471e-bd12-cf4827e17821'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Icennnn/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p7jwayop.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
