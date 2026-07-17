/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  academySidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      items: ['getting-started/overview', 'getting-started/contributing']
    },
    {
      type: 'category',
      label: 'Platform operations',
      items: ['operations/architecture', 'operations/publishing']
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/module-directory']
    }
  ]
};

export default sidebars;
