export const skills = [
    {
        id: 1,
        title: "Front-end web development",
        logo: "skillCard-i fa-brands fa-react",
        desc: "Use React and CSS to create interactive and beautifully designed websites based on stakeholder requirements and needs",
    },
    {
        id: 2,
        title: "Back-end web development",
        logo: "fa-brands fa-node",
        desc: "Use Node-js and MongoDB to store information and create CRUD functionality for the user, while focusing on the user's information privacy and security",
    },
    {
        id: 3,
        title: "Python Automation",
        logo: "skillCard-i fa-brands fa-python",
        desc: "Use Python programming to create executables that automate excel reports and enhance efficiency",
    },
    {
        id: 4,
        title: "MS Office Excel Proficiency",
        logo: "fa-solid fa-chart-line",
        desc: "Created various tools and reports for performance tracking, planning and forecasting. Utilize excel formulas, Pivot tables, vba and more",
    },
]

export const projects = [
    {
        id: 2,
        cat: "Web-development",
        title: "Simply",
        status: "incomplete",
        img: ["./img/simply.png", "./img/simply-light.png"],
        video: "",
        overview: "In this music streaming website, users can post multiple tracks at the same time and create multiple playlists. Exploring new music is made easy with playlists created by Simply featuring top tracks by genre and overall. Tools such as JWT authentication, password encryption (bcrypt), email OTP verification and others were used to secure user's information.",
        designGoals:[
            [
                "fa-solid fa-sitemap",
                "Simple Process Flow", 
                "Ability to upload and update multiple tracks with one simple click makes it easy to maintain playlists."
            ],
            [
                "fa-solid fa-shield",
                "Data Security", 
                "Uses JWT authentication, password encryption (bcrypt), email OTP verification and other methods to secure user's information."
            ],
            [
                "fa-solid fa-bell",
                "Interactive Design",
                "Use of notifications to notify about activity between users using socket.io and keeps users informed of new releases and updates made to playlists."
            ],
            [
                "fa-solid fa-desktop",
                "Responsive Design", 
                "Designed to be adaptable on all web platforms."
            ],
            [
                "fa-solid fa-chart-line",
                "Provide Analytics", 
                "Insight page provides analytics for the user. Administrative user has limited permissions, but is able to easily maintain different account's data."
            ]
        ],
        additionalPic: ["../img/simply-add.png", "../img/simply-add-light.png"],
        tools:{
            technologies: ["MERN Stack App", "Axios", "Redux", "JWT Authentication"],
            storage: ["Firebase"],
            libraries: ["Socket.IO", "Material UI", "Google-charts"],
            styling: ["Styled-components"],
            deployment: ["AWS"],
        },
        link: "",
        githubLink: "https://github.com/ajaramillo6/song-proof-app",
    },
    {
        id: 1,
        cat: "Web-development",
        title: "Backpack",
        status: "complete",
        img: ["./img/backpack.png", "./img/backpack-light.png"],
        video: "",
        overview: "Created a travel blog website that allows authorized users to easily create customizable posts. Posts can be saved as drafts to published later on. This is a very nice feature, as posts that have been published, can be drafted again while further editing takes place. Other logged in users can like and save posts for future reading. Google authentication is used for a secure login.",
        designGoals:[
            [
                "fa-solid fa-sitemap",
                "Simple Process Flow",
                "Ability to add, edit, or delete posts easily by authorized users. Use of pagination for recently added posts improves performance by reducing the amount of data loaded at once. Popular and favorite posts are displayed on the home page as well."
            ],
            [
                "fa-solid fa-images",
                "Customizable posts",
                "Ability to add more than one image per post and add as many links as needed. Formatting is made easy with a React-quill editing toolbar."
            ],
            [
                "fa-solid fa-desktop",
                "Responsive Design",
                "Designed to be adaptable to all web platforms."
            ], 
            [
                "fa-solid fa-shield", 
                "Data Security", 
                "Utilizes Google Authentication for secure login."
            ]
        ],
        additionalPic: ["../img/backpack-add.png", "../img/backpack-add-light.png"],
        tools:{
            technologies: ["MongoDB", "Prisma", "NextJS", "Google Authentication"],
            storage: ["Firebase"],
            libraries: ['Material UI', 'React-quill'],
            styling: ["CSS"],
            deployment: ["Vercel"],
        },
        link: "https://backpack-links.vercel.app/",
        githubLink: "https://github.com/ajaramillo6/backpack",
    },
]