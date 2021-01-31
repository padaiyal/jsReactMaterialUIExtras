<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div align="center">
  <h1 align="center">Project Name</h1>
  <p align="center">
    A template for React projects.
    <br />
    <a href="https://github.com/padaiyal/jsReactNpmProjectTemplate/issues/new/choose">Report Bug/Request Feature</a>
  </p>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Apache License][license-shield]][license-url] <br>
![Npm CI Build Test](https://github.com/padaiyal/jsReactNpmProjectTemplate/workflows/npm%20ci%20build%20test/badge.svg)
![Npm CI Coverage](https://github.com/padaiyal/jsReactNpmProjectTemplate/workflows/npm%20ci%20coverage/badge.svg)
</div>

<!--
*** To avoid retyping too much info. Do a search and replace with your text editor for the following:
    'jsReactNpmProjectTemplate'
 -->

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
        <a href="#usage">Usage</a>
    </li>
    <li>
        <a href="#roadmap">Roadmap</a>
    </li>
    <li>
        <a href="#contributing">Contributing</a>
    </li>
    <li>
        <a href="#license">License</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Describe the project.

<!-- USAGE -->
## Usage

### NavBar
A navigation bar containing a logo and tabs.
```
this.state = {
    tabs: [
        {
            1: {
                title: "Tab One",
                link: "tab-one"
            }   
        },
        {
            2: {
                title: "Tab Two",
                link: "tab-two"
            }   
        },
        {
            3: {
                title: "Tab Three",
                link: "tab-three"
            }    
        },
        {
            4: {
                title: "Tab Four",
                link: "tab-four"
            }    
        }
    ]
}

<NavBar companyLogo={companyLogo} tabs={this.state.tabs}/>
```

### AppFooter
A footer containing copyright text and a link to a contact form.
```
<AppFooter copyRightText={'Company Name © ' + (new Date().getFullYear()).toString()} contactText='Contact Us' contactLink='contact-us'/>
```

### HealthStatus
A component that displays the status of services used by the web application.
```
this.state = {
    services: [
        {
            1: {
                name: "Service One",
                status: true
            }   
        },
        {
            2: {
                name: "Service Two",
                status: true
            }   
        },
        {
            3: {
                name: "Service Three",
                status: false
            }    
        },
        {
            4: {
                name: "Service Four",
                status: true
            }    
        }
    ]
}

<HealthStatus services={this.state.services} height={500} width={500}/>
```

<!-- ROADMAP -->
## Roadmap
See the [open issues](https://github.com/padaiyal/jsReactNpmProjectTemplate/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your branch. (`git checkout -b contribution/AmazingContribution`)
3. Commit your changes. (`git commit -m 'Add some AmazingContribution'`)
4. Push to the branch. (`git push origin contribution/AmazingContribution`)
5. Open a Pull Request.


<!-- LICENSE -->
## License
Distributed under the Apache License. See [`LICENSE`](https://github.com/padaiyal/jsReactNpmProjectTemplate/blob/main/LICENSE) for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/padaiyal/jsReactNpmProjectTemplate.svg?style=for-the-badge
[contributors-url]: https://github.com/padaiyal/jsReactNpmProjectTemplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/padaiyal/jsReactNpmProjectTemplate.svg?style=for-the-badge
[forks-url]: https://github.com/padaiyal/jsReactNpmProjectTemplate/network/members
[stars-shield]: https://img.shields.io/github/stars/padaiyal/jsReactNpmProjectTemplate.svg?style=for-the-badge
[stars-url]: https://github.com/padaiyal/jsReactNpmProjectTemplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/padaiyal/jsReactNpmProjectTemplate.svg?style=for-the-badge
[issues-url]: https://github.com/padaiyal/jsReactNpmProjectTemplate/issues
[license-shield]: https://img.shields.io/github/license/padaiyal/jsReactNpmProjectTemplate.svg?style=for-the-badge
[license-url]: https://github.com/padaiyal/jsReactNpmProjectTemplate/blob/master/LICENSE