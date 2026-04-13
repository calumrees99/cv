module.exports = {
  name: 'Calum Rees',
  title: 'Platform Engineer',
  facts: {
    'Location': '<a href="https://www.google.com/maps/place/Farnborough/@51.2966381,-0.7580179,17z/data=!3m1!4b1!4m6!3m5!1s0x48742b2c126b03e7:0x287eca87f863216a!8m2!3d51.2966348!4d-0.755443!16s%2Fg%2F12qg393xw?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"><i class="fa fa-home fact-icon"></i>Farnborough</a>',
    'LinkedIn': `<a href="https://www.linkedin.com/in/calum-rees-263b7a147/"><i class="fa-brands fa-linkedin fact-icon"></i>Calum Rees</a>`,
    'GitHub': `<a href="https://github.com/calum-rees"><i class="fa-brands fa-github fact-icon"></i>calumrees999</a>`,
    'Email': '<a href="mailto:calumrees99@gmail.com"><i class="fa fa-envelope fact-icon"></i>calumrees99@gmail.com</a>'
  },
  introduction: `Platform Engineer with over 5 years of experience, specialising in Azure cloud platforms, infrastructure as code, and platform reliability, with experience delivering and supporting enterprise-scale services across public sector and digital organisation's.
    Focused on designing and improving cloud platforms that enable engineering teams to deliver reliable, secure, and scalable software services. My work typically centres around platform automation, infrastructure standardisation, observability,
    and operational excellence, helping teams reduce operational friction and improve service delivery.
  `,
  positions: [
    {
      title: 'DevOps Engineer @ Datapharm',
      period: 'October 2025 - Present',
      skills: ['Azure', 'Azure DevOps', 'Terraform', 'Container Apps', 'CI/CD'],
      contents: `Standardised infrastructure and deployment practices across the organisation by implementing reusable Terraform modules, Azure DevOps CI/CD templates, and Azure tagging policies—improving consistency, efficiency, and cost management. Enhanced system reliability through multi-region active/active container architectures with failover, and evaluated DAST tools for secure CI/CD integration.`
    },
    {
      title: 'Azure DevOps Engineer @ BAE Systems Digital Intelligence',
      period: 'August 2023 – October 2025',
      skills: ['Azure', 'Azure DevOps', 'App Service', 'Team Leadership', 'ARM/Bicep'],
      contents: `Worked as an Azure Platform Engineer supporting multiple products for an open-source public sector client, initially focusing on infrastructure migration within a small team. In July 2024, transitioned to a large-scale enterprise platform with over 200 services, progressing from senior individual contributor to Team Lead in early 2025. My strong performance led to nomination for the BAE Systems High Potential scheme. Alongside core responsibilities, mentored team members on platform engineering practices, troubleshooting, and professional development within DevOps and cloud engineering.`
    },
    {
      title: 'Site Reliability Engineer @ MMT Digital',
      period: 'October 2021 - August 2023',
      skills: ['Azure', 'AWS', 'kubernetes', 'Terraform', 'CI/CD'],
      contents: `Joined MMT Digital as an Associate Cloud Engineer, completing an intensive eight-week academy covering Docker, Azure, Kubernetes, and Terraform. Delivered platform support and reliability improvements on client engagements before moving to an AWS-based Terraform transformation project, where I helped build and configure Kubernetes environments and contributed to infrastructure modernisation. Gained additional experience supporting legacy platforms, broadening exposure to diverse cloud and DevOps practices.`
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
