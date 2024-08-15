export const positonconstants = [
    { title: "Left Back (LB)", value: "LB" },
    { title: "Left Wing Back (LWB)", value: "LWB" },
    { title: "Right Midfielder (RM)", value: "RM" },
    { title: "Defensive Midfielder (CDM)", value: "CDM" },
    { title: "Left Midfielder (LM)", value: "LM" },
    { title: "Attacking Midfielder (CAM)", value: "CAM" },
    { title: "Centre Forward (CF)", value: "CF" },
    { title: "Left Back (LB)", value: "LB" },
    { title: "Left Wing Back (LWB)", value: "LWB" },
    { title: "Right Midfielder (RM)", value: "RM" },
    { title: "Defensive Midfielder (CDM)", value: "CDM" },
    { title: "Left Midfielder (LM)", value: "LM" },
    { title: "Attacking Midfielder (CAM)", value: "CAM" },
    { title: "Centre Forward (CF)", value: "CF" },
]


export const formspecconstants = [
    {
        formName: "PACE", formvalue: 67, specs: [{
            name: "Sprint speed",
            value: 69,
            status: "UP"
        },
        {
            name: "Accelration",
            value: 69,
            status: "UP"
        }
        ]
    }, {
        formName: "SHOOTING", formvalue: 59, specs: [{
            name: "Finishing",
            value: 59,
            status: "UP"
        },
        {
            name: "Att. Position",
            value: 65,
            status: "UP"
        },
        {
            name: "Shot Power",
            value: 62
        },
        {
            name: "Long Shots",
            value: 61,
            status: "UP"
        },
        {
            name: "Penalties",
            value: 50,
        }, {
            name: "Volleys",
            value: 48,
        },
        ]
    },
    {
        formName: "PASSING", formvalue: 62, specs: [{
            name: "Vision",
            value: 59,
            status: "UP"
        },
        {
            name: "Crossing",
            value: 65,
        },
        {
            name: "FK Acc",
            value: 62
        },
        {
            name: "Long Pass",
            value: 61,
        },
        {
            name: "Short Pass",
            value: 50,
        }, {
            name: "Curve",
            value: 48,
        },
        ]
    },
    {
        formName: "DRIBBLING", formvalue: 71, specs: [{
            name: "Agility",
            value: 59,
            status: "UP"
        },
        {
            name: "Balance",
            value: 65,
        },
        {
            name: "Reactions",
            value: 62
        },
        {
            name: "Composure",
            value: 61,
        },
        {
            name: "Ball control",
            value: 50,
        }, {
            name: "Dribbling",
            value: 48,
        },
        ]
    },
    {
        formName: "DEFENDING", formvalue: 49, specs: [{
            name: "Interceptions",
            value: 59
        },
        {
            name: "Heading Acc",
            value: 65,
        },
        {
            name: "Def. Aware",
            value: 62
        },
        {
            name: "Stand Tackle",
            value: 61,
        },
        {
            name: "Slide Tackle",
            value: 50,
        },
        ]
    },
    {
        formName: "PHYSICAL", formvalue: 49, specs: [{
            name: "Jumping",
            value: 59
        },
        {
            name: "Stamina",
            value: 65,
        },
        {
            name: "Strength",
            value: 62
        },
        {
            name: "Aggression",
            value: 61,
        }
        ]
    },
]


export const skillspecs = [{
    name: "Skill Moves",
    value: 4,
    isStar: true,
    progress: 56
},
{
    name: "Weak Foot",
    value: 4,
    isStar: true,
    progress: 68
},
{
    name: "Attacking Work Rate",
    value: 'High',
    progress: 39
},
{
    name: "Defensive Work Rate",
    value: 'Medium',
    progress: 75
}
]

export const FooterData = {
    CompanyWidget: [
        {
            id: 1,
            title: "Get In Touch",
            description: "Don’t miss any updates of our new templates and extensions.!",
        }
    ],
    AboutWidget: [
        {
          id: 1,
          title: "Download",
          menuItems: [
              {
                id: 1,
                url: '#',
                text: 'Company',
              },
              {
                id: 2,
                url: '#',
                text: 'Android App',
              },
              {
                id: 3,
                url: '#',
                text: 'ios App',
              },
              {
                id: 4,
                url: '#',
                text: 'Desktop',
              },
              {
                id: 5,
                url: '#',
                text: 'Projects',
              },
              {
                  id: 6,
                  url: '#',
                  text: 'My tasks',
              },
          ],
      },
      {
            id: 2,
            title: "Help",
            menuItems: [
                {
                  id: 1,
                  url: '#',
                  text: 'FAQ',
                },
                {
                  id: 2,
                  url: '#',
                  text: 'Term & conditions',
                },
                {
                  id: 3,
                  url: '#',
                  text: 'Reporting',
                },
                {
                  id: 4,
                  url: '#',
                  text: 'Documentation',
                },
                {
                  id: 5,
                  url: '#',
                  text: 'Support Policy',
                },
                {
                    id: 6,
                    url: '#',
                    text: 'Privacy',
                  },
            ],
        },
    ],
    termsCondition: [
      {
          id: 1,
          title: "Team Solutions",
          menuItems: [
            {
              id: 1,
              url: '#',
              text: 'Support',
            },
            {
              id: 2,
              url: '#',
              text: 'Sales',
            },
            {
              id: 3,
              url: '#',
              text: 'Report Abuse',
            },
            {
              id: 4,
              url: '#',
              text: 'System Status',
            }
        ],
      }
    ],
    SocialLinks: [
        {
            id: 1,
            title: "Team Solutions",
            menuItems: [
                {
                  id: 1,
                  url: '#',
                  icon: 'ti-facebook',
                },
                {
                  id: 2,
                  url: '#',
                  icon: 'ti-twitter-alt',
                },
                {
                  id: 3,
                  url: '#',
                  icon: 'ti-vimeo-alt',
                },
                {
                  id: 4,
                  url: '#',
                  icon: 'ti-pinterest',
                }
            ]
        }
    ],
    socialIcon:[
      {
        id: 1,
        url: 'https://www.facebook.com/',
        icon: 'ti-facebook',
      },
      {
        id: 2,
        url: '#',
        icon: 'ti-twitter-alt',
      },
      {
        id: 3,
        url: '#',
        icon: 'ti-vimeo-alt',
      },
      {
        id: 4,
        url: '#',
        icon: 'ti-pinterest',
      }
    ],
    copywrite:"© SaasLand Inc.. 2019 All rights reserved.",
    TestimonialText: [
      {
        id: 1,
        image: "new/member_01.jpg",
        description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
        authorName: "Phillip Anthropy",
        authorPost: "UI/UX designer", 
      },
      {
        id: 2,
        image: "new/member_01.jpg",
        description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
        authorName: "Phillip Anthropy",
        authorPost: "UI/UX designer", 
      },
      {
        id: 3,
        image: "new/member_01.jpg",
        description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
        authorName: "Phillip Anthropy",
        authorPost: "UI/UX designer", 
      },
      {
        id: 4,
        image: "new/member_01.jpg",
        description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
        authorName: "Phillip Anthropy",
        authorPost: "UI/UX designer", 
      }
    ],
    aboutLinks: [
      {
        id: 1,
        url: '#',
        item: 'Developer',
      },
      {
        id: 2,
        url: '#',
        item: 'Blog',
      },
      {
        id: 3,
        url: '#',
        item: 'Investor',
      },
      {
        id: 4,
        url: '#',
        item: 'Sitemap',
      },
      {
        id: 5,
        url: '#',
        item: 'Jobs',
      }
    ],
    helpLinks: [
      {
        id: 1,
        url: '#',
        item: 'Help and Contact',
      },
      {
        id: 2,
        url: '#',
        item: 'Fees',
      },
      {
        id: 3,
        url: '#',
        item: 'Security',
      },
      {
        id: 4,
        url: '#',
        item: 'App',
      },
      {
        id: 5,
        url: '#',
        item: 'Shop',
      }
    ],
    PrivacyLinks: [
      {
        id: 1,
        url: '#',
        item: 'Privacy Policy',
      },
      {
        id: 2,
        url: '#',
        item: 'Legal Agreement',
      },
      {
        id: 3,
        url: '#',
        item: 'Feedback',
      }
    ],
    about: [
      {
        id: 1,
        url: '#',
        text: 'Company',
      },
      {
        id: 2,
        url: '#',
        text: 'Leadership',
      },
      {
        id: 3,
        url: '#',
        text: 'Diversity',
      },
      {
        id: 4,
        url: '#',
        text: 'Jobs',
      },
      {
        id: 5,
        url: '#',
        text: 'Press',
      },
      {
        id: 6,
        url: '#',
        text: 'Wavelength',
      },
    ],
    Solution: [
      {
        id: 1,
        url: '#',
        text: 'Project Management',
      },
      {
        id: 2,
        url: '#',
        text: 'Agile',
      },
      {
        id: 3,
        url: '#',
        text: 'Task Management',
      },
      {
        id: 4,
        url: '#',
        text: 'Reporting',
      },
      {
        id: 5,
        url: '#',
        text: 'Work Tracking',
      },
      {
        id: 6,
        url: '#',
        text: 'See All Uses',
      },
    ],
    teamSolution: [
      {
        id: 1,
        url: '#',
        text: 'Engineering',
      },
      {
        id: 2,
        url: '#',
        text: 'Designers',
      },
      {
        id: 3,
        url: '#',
        text: 'Sales',
      },
      {
        id: 4,
        url: '#',
        text: 'Developers',
      },
      {
        id: 5,
        url: '#',
        text: 'Marketing',
      },
      {
        id: 6,
        url: '#',
        text: 'See All team',
      },
    ],
};