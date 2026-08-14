module.exports = {
  name: 'Calum Rees',
  title: 'Platform Engineer',
  facts: {
    'Location': '<a href="https://www.google.com/maps/place/Farnborough/@51.2966381,-0.7580179,17z/data=!3m1!4b1!4m6!3m5!1s0x48742b2c126b03e7:0x287eca87f863216a!8m2!3d51.2966348!4d-0.755443!16s%2Fg%2F12qg393xw?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"><i class="fa fa-home fact-icon"></i>Farnborough, Hampshire</a>',
    'LinkedIn': `<a href="https://www.linkedin.com/in/calum-rees-263b7a147/"><i class="fa-brands fa-linkedin fact-icon"></i>Calum Rees</a>`,
    'GitHub': `<a href="https://github.com/calumrees99"><i class="fa-brands fa-github fact-icon"></i>calumrees99</a>`,
    'Email': '<a href="mailto:calumrees99@gmail.com"><i class="fa fa-envelope fact-icon"></i>calumrees99@gmail.com</a>'
  },
  introduction: `Platform Engineer with 5 years of experience designing and operating cloud platforms in Azure, specialising in infrastructure as code, platform reliability, and developer enablement. Experienced in building and evolving enterprise-scale platforms supporting hundreds of services, with a focus on standardisation, automation, and operational excellence. I work closely with engineering teams to reduce cognitive load, improve deployment velocity, and increase system reliability through well-designed platform capabilities and tooling. My work centres on creating scalable, self-served platforms through reusable infrastructure, CI/CD standardisation, observability, and resilient architecture design.
  `,

  credentials: [
  {
    contents: `
- Azure Solutions Architect Expert (AZ-305)
- Azure Administrator Associate (AZ-104)
- Azure Fundamentals (AZ-900)
- Azure Data Fundamentals (DP-900)
`
  }
],

  positions: [
    {
      title: 'DevOps Engineer @ Datapharm',
      period: 'October 2025 - Present',
      skills: ['Azure', 'Azure DevOps', 'Terraform', 'Container Apps', 'CI/CD'],
      contents: `
- Defined and rolled out new naming and tagging conventions to improve governance and cost allocation.
- Contributed to a data environment refresh project: extracted, sanitised, and loaded production-like data into non-production environments to improve testing fidelity.
- Owned design and rollout of Datapharm's first internal developer platform (golden path), standardising CI/CD and Terraform patterns across Container Apps workloads.
- Instrumented .NET containers with native OpenTelemetry and deployed an OpenTelemetry Collector on Container App environment to stream telemetry to Application Insights.
- Leveraged AI-assisted coding tools (GitHub Copilot and Claude) to accelerate implementation, improve code quality, and increase delivery efficiency.`

    },
    {
      title: 'Azure DevOps Engineer @ BAE Systems Digital Intelligence',
      period: 'August 2023 – October 2025',
      skills: ['Azure', 'Azure DevOps', 'App Service', 'Team Leadership', 'ARM/Bicep'],
      contents: `
- Acted as technical lead and escalation point across two concurrent projects: mentored an apprentice who became the primary project contact, and I later led a six-person team, providing technical leadership and communication between team and delivery/account managers.
- Selected for the BAE Systems High Potential programme for performance and leadership potential.
- Supported a platform hosting 250+ services, providing operational and delivery support.
- Defined and prioritised a backlog of user stories to deliver platform features and reliability improvements.
- Migrated a critical service to an Azure DevOps YAML CI/CD pipeline; authored and executed a phased migration plan to minimise sprint impact.
- Led the migration of a key services from Azure DevOps to GitHub Actions, standardising CI/CD workflows, improving automation, and reducing operational overhead.
- Designed and rolled out an Application Insights consolidation strategy, moving from a single instance to workload/product-level insight groups to improve observability and cost control.`
    },
    {
      title: 'Site Reliability Engineer @ MMT Digital',
      period: 'October 2021 - August 2023',
      skills: ['Azure', 'AWS', 'kubernetes', 'Terraform', 'CI/CD'],
      contents: `
- Completed an intensive 8-week bootcamp covering Azure DevOps, Azure, Kubernetes, Docker, and related platform tooling.
- Supported Kubernetes clusters running ~8 services: implemented cert-manager / Let's Encrypt automated certificate renewals, applied numerous security fixes, and configured Horizontal Pod Autoscaling (HPA).
- AWS/Terraform refactor to deliver a production-ready Kubernetes platform for 50+ services, improving reliability and infrastructure consistency across environments.`
    }
  ],
  projects: [
    {
      header: 'Daylog - Nursery Management System',
      skills: ['Microservice', 'Event-Driven Architecture', 'Golang', 'PostgreSQL', 'React'],
      contents: `A nursery management system MvP, where a user can enter fields relating to a childs day at nursery and an admin dashboard where staff can add/edit/remove classrooms, staff and children: https://github.com/calumrees99/daylog`
    },
     {
      header: 'ChocoJump',
      skills: ['Golang ', 'game development'],
      contents: `Developed a simple 2D platformer game using Golang and the Ebiten game engine. https://github.com/calumrees99/chocojump`
    },
    {
      header: 'Terraform Modules',
      skills: ['terraform', 'infrastructure as code'],
      contents: `Developed reusable Terraform modules to standardize infrastructure provisioning and improve deployment consistency across multiple projects. https://github.com/calumrees99/terraform-modules`
    },
  ]
};
