/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  academySidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      items: ['getting-started/overview', 'getting-started/navigation', 'getting-started/contributing']
    },
    {
      type: 'category',
      label: 'Learning delivery',
      items: ['learning/courses', 'learning/labs', 'learning/assessments']
    },
    {
      type: 'category',
      label: 'Platform operations',
      items: ['operations/architecture', 'operations/identity-access', 'operations/publishing']
    },
    {
      type: 'category',
      label: 'Standards and governance',
      items: ['governance/documentation-standard', 'governance/security', 'governance/accessibility']
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/module-directory', 'reference/support']
    }
  ]
};

export default sidebars;
