import { IoBookOutline, IoCalendarOutline, IoLocationOutline, IoMailOpenOutline, IoPhonePortraitOutline } from "react-icons/io5";
import Profile from '../assets/images/profile.png'
import { FaGitAlt, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiExpress, SiGithub, SiMongodb } from "react-icons/si";
import { TbBrandBootstrap, TbBrandCss3, TbBrandJavascript, TbBrandLeetcode, TbBrandMysql, TbBrandRedux, TbTerminal2 } from "react-icons/tb";
import { LiaReact } from "react-icons/lia";
import { SlBadge } from "react-icons/sl";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiJavaLine, RiNodejsLine, RiTailwindCssLine } from "react-icons/ri";
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'
import project5 from '../assets/images/project5.png'
import project6 from '../assets/images/project6.png'
import project7 from '../assets/images/project7.png'
import project8 from '../assets/images/project8.png'
import t1 from '../assets/images/t1.png'

export const resumeUrl = "https://docs.google.com/document/d/1Ew1wb9NNB0XSV_6QpxAG8IIydJA7ntX6Qh8Bw9xz3w0/edit?usp=sharing"

export const sidebarData = [
    { to: "mailto:matrixmind777@gmail.com", icon: <IoMailOpenOutline />, title: "Email", description: "matrixmind777@gmail.com" },
    { to: "tel:+919616406000", icon: <IoPhonePortraitOutline />, title: "Phone", description: "+91-9616406000" },
    { to: "#", icon: <IoCalendarOutline />, title: "Graduation Year", description: "2023" },
    { to: "contact", icon: <IoLocationOutline />, title: "Location", description: "Lucknow, Uttar Pradesh, India" },

]

export const sidebarHeaderData = {
    profileUrl: Profile,
    name: "Anand Sharma",
    position: "Full Stack Developer"
}
export const sidebarFooterData = [
    { to: "https://www.linkedin.com/in/anand777sharma/", icon: <FaLinkedin /> },
    { to: "https://leetcode.com/anand777sharma/", icon: <TbBrandLeetcode /> },
    { to: "https://github.com/anand777sharma", icon: <SiGithub /> },
    { to: "https://www.instagram.com/anand777sharma/", icon: <FaInstagram /> },
    {
        to: `https://wa.me/+919616406000?text= Hiii Anand, I'm sending this message 
        via your portfolio. It's great to connect with you!`, icon: <FaWhatsapp />
    },

]

export const aboutData = {
    mainContent: <>
        {/* <p>
            Namaste! I'm <strong>Anand Sharma</strong>, a driven and enthusiastic <strong>B.Tech </strong> Graduate with a specialization in <strong>Full Stack Development</strong>.  I have completed my Graduation in <strong>2023</strong>. My journey from engineering to web development is fueled by a deep passion for technology and a love for creating digital solutions that are both functional and visually captivating.</p><p>

            I specialize in <strong>designing and developing websites</strong> that not only meet business objectives but also create memorable experiences for users. I’m dedicated to helping <strong>business owners</strong> and <strong>developers</strong> transform their ideas into reality by crafting websites that perfectly align with their vision and engage visitors, encouraging them to explore and return.</p><p>

            My technical expertise spans across the <strong>full stack</strong>, with proficiency in both <strong>front-end</strong> and <strong>back-end development</strong>. I’ve honed my skills through a variety of projects, from building an <strong>E-commerce app</strong> with integrated <strong>PayPal payments</strong> to developing a <strong>Twitter clone</strong> with complex features like <strong>user authentication</strong>, <strong>tweet management</strong>, and <strong>real-time updates</strong>. My experience with technologies such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Express.js</strong> allows me to tackle diverse challenges in web development.</p><p>

            Throughout my career, I've demonstrated a strong ability to <strong>lead</strong> and <strong>collaborate</strong>. I successfully led a team of five in the <strong>Smart India Hackathon</strong>, where we focused on <strong>frontend design</strong> and advanced to the college-level competition. My projects, such as the <strong>Flipkart clone</strong> and the <strong>YouTube clone</strong>, showcase my ability to create <strong>responsive</strong>, <strong>user-friendly applications</strong> that enhance user engagement and streamline workflows.</p><p>

            Beyond coding, I’m constantly seeking to <strong>expand my knowledge</strong> and stay updated with the latest industry trends. I’ve completed various specialized trainings, including <strong>MERN Stack Development</strong> and <strong>Core Java</strong>, which have further solidified my foundation in software development.</p><p>

            I thrive on the challenge of turning complex problems into <strong>elegant</strong>, <strong>efficient solutions</strong>. Whether it’s <strong>enhancing user experience</strong>, <strong>boosting website performance</strong>, or <strong>developing</strong> entirely new features, I’m committed to delivering <strong>top-notch results</strong> that not only meet but exceed expectations.</p><p>

            Let’s connect and explore how we can collaborate to bring your next project to life!
        </p> */}
        <p>
            Namaste! I'm <strong>Anand Sharma</strong>, a passionate <strong>Full Stack Developer</strong> and a driven <strong>B.Tech Graduate</strong> (Class of 2023). My journey into web development is fueled by a deep enthusiasm for technology and a commitment to crafting digital solutions that are both functional and visually appealing.
        </p>
        <p>
            As a freelance developer, I specialize in <strong>designing and developing websites</strong> that align with business objectives while providing memorable user experiences. I am dedicated to helping <strong>business owners</strong> and <strong>entrepreneurs</strong> transform their ideas into impactful digital solutions that engage visitors and drive results.
        </p>
        <p>
            My expertise spans the <strong>full stack</strong>, with a strong foundation in <strong>front-end</strong> and <strong>back-end technologies</strong>. Leveraging modern tools and frameworks, I focus on creating responsive, efficient, and user-friendly applications that align with my clients' visions and objectives.
        </p>
        <p>
            I thrive on the challenge of turning complex problems into <strong>simple</strong>, <strong>effective solutions</strong>. From enhancing user experience to boosting website performance, I am committed to delivering results that exceed expectations.
        </p>
        <p>
            Let’s connect and collaborate to bring your next project to life!
        </p>

    </>
}
export const SliderData = {
    title: "pata nahi kya likhe",
    slides: [
        {
            title: "slide 1",
            image: Profile,
            description: <p>
                <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                <br />
                <strong>Solution</strong>: Dedicated extra hours to online courses and hands - on practice.
                < br />
                <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
            </p >
        },
        {
            title: "slide 2",
            image: Profile,
            description: <p>
                <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                <br />
                <strong>Solution</strong>: Dedicated extra hours to online courses and hands-on practice.
                <br />
                <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
            </p>
        },
        {
            title: "slide 3",
            image: Profile,
            description: <p>
                <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                <br />
                <strong>Solution</strong>: Dedicated extra hours to online courses and hands-on practice.
                <br />
                <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
            </p>
        },
        {
            title: "slide 4",
            image: Profile,
            description: <p>
                <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                <br />
                <strong>Solution</strong>: Dedicated extra hours to online courses and hands-on practice.
                <br />
                <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
                <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                <br />
                <strong>Solution</strong>: Dedicated extra hours to online courses and hands-on practice.
                <br />
                <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
            </p>
        },


    ]
}
export const Testimonal = {
    title: "What Other say About me",
    slides: [
        {
            title: "Nikha Junction",
            image: t1,
            description: <p>
                Anand ek amazing web developer hain jo apne clients ki zarurat ko achhi tarah samajhte hain. Mere website par kaam karte waqt unhone meri vision ko ekdum perfect tarike se reality mein badla. Shuruaat se leke final delivery tak Anand ne mujhe poori process mein involve rakha, technical aspects clearly samjhaye, aur ek aisa product deliver kiya jo mere expectations se kaafi zyada tha. Ab mera website sirf visually stunning hi nahi, balki highly functional aur user-friendly bhi hai. Agar aap ek professional aur talented developer dhoondh rahe hain jo quality work deliver kare, toh Anand ko zarur consider karein!
                <br />
                <strong>Name</strong>: Haji Abdul Khaliq
                <br />
                <strong>Email</strong>: nikahjunction@gmail.com
                </p >
        },



    ]
}

export const skillData = {
    title: "my Skills",
    skills: [
        { title: "HTML", icon: <AiOutlineHtml5 />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "CSS", icon: <TbBrandCss3 />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "JavaScript", icon: <TbBrandJavascript />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "Bootstrap", icon: <TbBrandBootstrap />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "Tailwind CSS", icon: <RiTailwindCssLine />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "React", icon: <LiaReact />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "Redux", icon: <TbBrandRedux />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "Git", icon: <FaGitAlt />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "GitHub", icon: <FaGithub />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "Terminal", icon: <TbTerminal2 />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "Node.js", icon: <RiNodejsLine />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "Express", icon: <SiExpress />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "MongoDb", icon: <SiMongodb />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "MySQL", icon: <TbBrandMysql />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },
        { title: "Java", icon: <RiJavaLine />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "100%" },


    ]
}

export const EducationTimelineData = {
    title: "Education",
    icon: <IoBookOutline />,
    timelines: [
        {
            timelineTitle: "Bachalour of technology",
            from: "2019",
            to: "2023",
            location: <>Babu Banarasi Das National Institute of Technology and Management, <br /> Lucknow, Uttar Pradesh, India</>,
            description:
                <>

                </>,

        },
        {
            timelineTitle: "Intermediate",
            from: "2018",
            to: "2019",
            location: <>Sri Krishna Datta Academy, <br /> Lucknow, Uttar Pradesh, India</>,
            description:
                <>

                </>,

        },
        {
            timelineTitle: "High School",
            from: "2016",
            to: "2017",
            location: <>Sri Krishna Datta Academy, <br /> Lucknow, Uttar Pradesh, India</>,
            description:
                <>

                </>,

        },
    ]
}
export const ExperienceTimelineData = {
    title: "Experience",
    icon: <IoBookOutline />,
    timelines: [
        {
            timelineTitle: <>Diploma Program <br />Internshala Trainnings</>,
            from: "September 2023 ",
            to: "march 2024",
            location: <>Lucknow, Uttar Pradesh, India (Remote)</>,
            description:
                <>

                </>,

        },
        {
            timelineTitle: <>Summer Intern <br />Digipodium</>,
            from: "July 2022 ",
            to: "December 2022",
            location: <>Lucknow, Uttar Pradesh, India (on-site)</>,
            description:
                <>

                </>,

        }
    ]
}
export const CirtificationTimelineData = {
    title: "CERTIFICATIONS",
    icon: <SlBadge />,
    timelines: [
        {
            timelineTitle: <>FullStack Development Course <br />Internshala Trainnings</>,
            from: "September 2023 ",
            to: "March 2024",
            location: <>Lucknow, Uttar Pradesh, India (Remote)</>,
            description:
                <>

                </>,

        },
        {
            timelineTitle: <> WebDevelopment(MERN) Course <br />Digipodium</>,
            from: "July 2022 ",
            to: "December 2022",
            location: <>Lucknow, Uttar Pradesh, India (On-site)</>,
            description:
                <>

                </>,

        },
        {
            timelineTitle: <> Java Online Training <br />Internshala Trainnings</>,
            from: "June 2020 ",
            to: "July 2020",
            location: <>Lucknow, Uttar Pradesh, India (Remote)</>,
            description:
                <>

                </>,

        },
    ]
}


export const projects = [
    // {
    //     githubUrl: "#",
    //     deployedUrl: "https://anand777.vercel.app/",
    //     image: project6,
    //     title: "Affiliate Management System",
    //     category: "Marketing & Business Tools",
    //     description: (
    //         <>
    //             <p>
    //                 <strong>Affiliate Management System</strong> is a web application designed to streamline the process of managing and empowering affiliates. Built with <strong>Next.js</strong>, <strong>ShadCN UI</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, the platform ensures a modern and efficient user experience.
    //             </p>
    //             <p>
    //                 This application enables users to register as affiliates and access their unique affiliate dashboard. Upon successful registration, affiliates can generate their personalized referral links directly from the dashboard. The platform integrates <strong>Firebase</strong> as its backend, ensuring secure and scalable data management.
    //             </p>
    //             <p>
    //                 The intuitive design and seamless functionality make it easy for affiliates to join the program, manage their links, and track their activities. With a focus on performance and user satisfaction, this system offers a reliable solution for affiliate management.
    //             </p>
    //         </>
    //     )

    // },
    {
        githubUrl: "#",
        deployedUrl: "https://restop.vercel.app/",
        image: project7,
        title: "Restaurant Digital MENU UI",
        category: "Restaurant, Digital Menu",
        description: (
            <>
                <p>
                    <strong>Restaurant Digital Menu</strong> is an interactive web application crafted to enhance the dining experience for both customers and restaurant owners. Built using <strong>Next.js</strong>, <strong>ShadCN UI</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, it delivers a modern and user-friendly interface.
                </p>
                <p>
                    This application allows users to explore the menu and select their preferred mode of service—<strong>Dine-In</strong>, <strong>Delivery</strong>, or <strong>Takeaway</strong>. Customers can conveniently generate their orders, including billing details, and send them directly to the restaurant owner’s <strong>WhatsApp</strong>. This seamless integration ensures fast and reliable communication between the customer and the restaurant.
                </p>
                <p>
                    By digitizing the ordering process, this system helps restaurants interact with their customers efficiently, improve order management, and enhance the overall dining experience. With its intuitive design and practical functionality, the Restaurant Digital Menu is a valuable tool for modern restaurant operations.
                </p>
            </>
        )


    },
    {
        githubUrl: "#",
        deployedUrl: "https://nikahjunction.netlify.app/",
        image: project8,
        title: "Nikah Junction",
        category: "Matrimonial Landing Page",
        description: (
            <>
                <p>
                    <strong>Matrimonial Landing Page</strong> is a modern web application designed to help individuals find their ideal life partner. Built using <strong>React</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, and <strong>Firebase</strong>, the platform ensures a smooth and user-friendly experience for prospective users.
                </p>
                <p>
                    This landing page enables users to fill out a detailed form and submit inquiries to express their preferences for a life partner. The application is designed to simplify the matchmaking process, connecting individuals with our clients, who specialize in finding the best match for each user based on their unique requirements and aspirations.
                </p>
                <p>
                    With its elegant design and robust backend support, this platform offers a reliable solution for those seeking meaningful connections and a partner for life. Whether you are looking for a specific type of match or general guidance, the Matrimonial Landing Page provides a seamless way to begin your journey.
                </p>
            </>
        )



    },
    {
        githubUrl: "https://github.com/anand777sharma/service-management",
        deployedUrl: "https://servicelist.netlify.app/",
        image: project1,
        title: "Healthcare Service Management List",
        category: "Healthcare, Service Management",
        description: <>
            <p>
                A <strong>web-based application</strong> designed to manage and list various <strong>healthcare services</strong> efficiently. This app allows users to <strong>add, update, and delete services</strong>, providing an organized and easy-to-navigate interface.
            </p>
            <p>
                It uses modern technologies like <strong>React</strong> for frontend development and connects seamlessly with an <strong>API</strong> for dynamic data fetching and updates.
            </p>
            <p>
                Users can <strong>search through services</strong> and <strong>filter them by categories</strong>, ensuring a streamlined experience.
            </p>
        </>
    },
    {
        githubUrl: "https://github.com/anand777sharma/portfolio",
        deployedUrl: "https://anand777.netlify.app/",
        image: project2,
        title: "My Portfolio",
        category: "Personal, Web Development",
        description: (
            <>
                <p>
                    This is my <strong>personal portfolio website</strong>, showcasing my skills, projects, and professional journey as a <strong>web developer</strong>. The site is designed to highlight my expertise in various technologies and provide a platform for potential employers and clients to learn more about me.
                </p>
                <p>
                    Built using <strong>React</strong> and <strong>modern web technologies</strong>, the portfolio features a clean and responsive design, making it accessible on both desktop and mobile devices.
                </p>
                <p>
                    Users can explore different <strong>projects</strong> I've worked on, read about my <strong>experience</strong>, and get in touch with me through an integrated <strong>contact form</strong>.
                </p>
            </>
        )
    },
    {
        githubUrl: "#",
        deployedUrl: "https://res-order.netlify.app/",
        image: project3,
        title: "Restaurant Menu Ordering",
        category: "Restaurant, Digital Menu, QR Code",
        description: (
            <>
                <p>
                    This software provides a seamless <strong>digital menu ordering system</strong> for restaurants, using <strong>QR code technology</strong> to enhance the customer experience. Diners can easily scan the QR code to access the digital menu directly on their <strong>mobile phones</strong>, eliminating the need for physical menus.
                </p>
                <p>
                    The system allows users to <strong>place orders</strong> conveniently through their devices, with the option to <strong>pay instantly</strong> or after the meal, providing flexibility and a streamlined dining experience.
                </p>
                <p>
                    Designed to improve operational efficiency and customer convenience, this solution is perfect for modern restaurants looking to adopt <strong>contactless ordering and payment</strong> methods.
                </p>
            </>
        )
    },
    {
        githubUrl: "https://github.com/anand777sharma/focus-on-today",
        deployedUrl: "https://focustodoapplication.netlify.app/",
        image: project4,
        title: " Focus On today",
        category: "Productivity Application",
        description: (
            <>
                <p>
                    <strong>Focus On Today</strong> is a simple yet powerful <strong>to-do application</strong> designed to help users stay organized and focused on their daily tasks. The app includes comprehensive <strong>form validation</strong> to ensure that tasks are added accurately.
                </p>
                <p>
                    All data is persistently stored using <strong>localStorage</strong>, allowing users to retain their tasks even after closing the application or refreshing the page, ensuring a seamless and reliable user experience.
                </p>
                <p>
                    This productivity tool is perfect for individuals looking to manage their tasks efficiently and improve their focus on important tasks throughout the day.
                </p>
            </>
        )
    },
    // {
    //     githubUrl: "https://github.com/anand777sharma/videostriming",
    //     deployedUrl: "https://videostreamer4you.netlify.app/",
    //     image: project5,
    //     title: "Videostreaming",
    //     category: "Media, Streaming, Entertainment",
    //     description: (
    //         <>
    //             <p>
    //                 <strong>Videostreaming</strong> is an online video streaming platform built using <strong>React</strong>, offering users a smooth and engaging experience for watching videos. The platform integrates with <strong>RapidAPI</strong> to fetch and stream content dynamically, ensuring fast and reliable video delivery.
    //             </p>
    //             <p>
    //                 This application allows users to browse a wide range of video content, from movies to user-generated content, with an easy-to-navigate interface and a seamless playback experience. The application leverages modern front-end technologies to create a responsive and intuitive design.
    //             </p>
    //             <p>
    //                 By utilizing <strong>RapidAPI</strong>, the app ensures real-time access to a vast database of videos and provides features such as video search, filtering, and smooth video playback. Whether you're watching on desktop or mobile, this app delivers a consistent streaming experience.
    //             </p>
    //         </>
    //     )
    // },
   
]

// ofzk nvvg kfsc juof