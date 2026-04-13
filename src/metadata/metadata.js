module.exports = {
  name: 'Calum Rees',
  title: 'Platform Engineer',
  facts: {
    'Location': '<a href="https://www.google.com/maps/place/Farnborough/@51.2966381,-0.7580179,17z/data=!3m1!4b1!4m6!3m5!1s0x48742b2c126b03e7:0x287eca87f863216a!8m2!3d51.2966348!4d-0.755443!16s%2Fg%2F12qg393xw?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"><i class="fa fa-home fact-icon"></i>Farnborough</a>',
    'LinkedIn': `<a href="https://www.linkedin.com/in/calum-rees-263b7a147/"><i class="fa-brands fa-linkedin fact-icon"></i>Calum Rees</a>`,
    'GitHub': `<a href="https://github.com/calumrees99"><i class="fa-brands fa-github fact-icon"></i>calumrees99</a>`,
    'Email': '<a href="mailto:calumrees99@gmail.com"><i class="fa fa-envelope fact-icon"></i>calumrees99@gmail.com</a>'
  },
  introduction: `Platform Engineer with 5+ years of experience designing and operating cloud platforms in Azure, specialising in infrastructure as code, platform reliability, and developer enablement. Experienced in building and evolving enterprise-scale platforms supporting hundreds of services, with a focus on standardisation, automation, and operational excellence. I work closely with engineering teams to reduce cognitive load, improve deployment velocity, and increase system reliability through well-designed platform capabilities and tooling. My work centres on creating scalable, self-service platforms through reusable infrastructure, CI/CD standardisation, observability, and resilient architecture design.
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
- Led standardisation of infrastructure and deployment practices across the organisation by introducing reusable Terraform modules, Azure DevOps CI/CD templates, and Azure tagging policies—improving consistency, reducing configuration drift, and enabling better cost governance.
- Contributed to platform security maturity by evaluating DAST tooling into CI/CD pipelines.Played a key role in shaping internal platform capabilities to improve developer experience, reduce manual effort, and support scalable service delivery.`
    },
    {
      title: 'Azure DevOps Engineer @ BAE Systems Digital Intelligence',
      period: 'August 2023 – October 2025',
      skills: ['Azure', 'Azure DevOps', 'App Service', 'Team Leadership', 'ARM/Bicep'],
      contents: `
- Worked as an Azure Platform Engineer supporting a large-scale enterprise platform hosting 200+ services for a public sector client.
- Progressed from senior individual contributor to Team Lead in early 2025, leading a team responsible for platform reliability, infrastructure delivery, and operational support.    
- Mentored engineers on platform engineering practices, troubleshooting, and cloud architecture, contributing to improved team capability and delivery quality.
- Recognised for high performance and impact through nomination to the BAE Systems High Potential programme.`
    },
    {
      title: 'Site Reliability Engineer @ MMT Digital',
      period: 'October 2021 - August 2023',
      skills: ['Azure', 'AWS', 'kubernetes', 'Terraform', 'CI/CD'],
      contents: `
- Joined as an Associate Cloud Engineer, completing an intensive training programme covering Docker, Azure, Kubernetes, and Terraform.
- Contributed to multiple client engagements delivering platform support, reliability improvements, and infrastructure modernisation across Azure and AWS environments.
- Worked on an AWS-based Terraform transformation project, helping design and build Kubernetes environments and improve infrastructure consistency.
- Gained experience supporting both modern and legacy platforms, developing a broad understanding of cloud architectures and operational challenges.`
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
