import { IoBookOutline, IoCalendarOutline, IoLocationOutline, IoMailOpenOutline, IoPhonePortraitOutline } from "react-icons/io5";
import Profile from '../assets/images/profile.png'
import { FaGitAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiExpress, SiGithub, SiMongodb } from "react-icons/si";
import { TbBrandBootstrap, TbBrandCss3, TbBrandJavascript, TbBrandLeetcode, TbBrandMysql, TbBrandRedux, TbTerminal2 } from "react-icons/tb";
import { LiaReact } from "react-icons/lia";
import { SlBadge } from "react-icons/sl";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiJavaLine, RiNodejsLine, RiTailwindCssLine } from "react-icons/ri";

export const sidebarData = [
    { to: "mailto:matrixmind777@gmail.com", icon: <IoMailOpenOutline />, title: "Email", description: "matrixmind777@gmail.com" },
    { to: "tel:+919616406000", icon: <IoPhonePortraitOutline />, title: "Phone", description: "+91-9616406000" },
    { to: "", icon: <IoCalendarOutline />, title: "Graduation Year", description: "2023" },
    { to: "", icon: <IoLocationOutline />, title: "Location", description: "Lucknow, Uttar Pradesh, India" },

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
]

export const aboutData = {
    mainContent: <>
        <p>
            Namaste! I'm <strong>Anand Sharma</strong>, a driven and enthusiastic <strong>B.Tech </strong> Graduate with a specialization in <strong>Full Stack Development</strong>.  I have completed my Graduation in <strong>2023</strong>. My journey from engineering to web development is fueled by a deep passion for technology and a love for creating digital solutions that are both functional and visually captivating.</p><p>

            I specialize in <strong>designing and developing websites</strong> that not only meet business objectives but also create memorable experiences for users. I’m dedicated to helping <strong>business owners</strong> and <strong>developers</strong> transform their ideas into reality by crafting websites that perfectly align with their vision and engage visitors, encouraging them to explore and return.</p><p>

            My technical expertise spans across the <strong>full stack</strong>, with proficiency in both <strong>front-end</strong> and <strong>back-end development</strong>. I’ve honed my skills through a variety of projects, from building an <strong>E-commerce app</strong> with integrated <strong>PayPal payments</strong> to developing a <strong>Twitter clone</strong> with complex features like <strong>user authentication</strong>, <strong>tweet management</strong>, and <strong>real-time updates</strong>. My experience with technologies such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Express.js</strong> allows me to tackle diverse challenges in web development.</p><p>

            Throughout my career, I've demonstrated a strong ability to <strong>lead</strong> and <strong>collaborate</strong>. I successfully led a team of five in the <strong>Smart India Hackathon</strong>, where we focused on <strong>frontend design</strong> and advanced to the college-level competition. My projects, such as the <strong>Flipkart clone</strong> and the <strong>YouTube clone</strong>, showcase my ability to create <strong>responsive</strong>, <strong>user-friendly applications</strong> that enhance user engagement and streamline workflows.</p><p>

            Beyond coding, I’m constantly seeking to <strong>expand my knowledge</strong> and stay updated with the latest industry trends. I’ve completed various specialized trainings, including <strong>MERN Stack Development</strong> and <strong>Core Java</strong>, which have further solidified my foundation in software development.</p><p>

            I thrive on the challenge of turning complex problems into <strong>elegant</strong>, <strong>efficient solutions</strong>. Whether it’s <strong>enhancing user experience</strong>, <strong>boosting website performance</strong>, or <strong>developing</strong> entirely new features, I’m committed to delivering <strong>top-notch results</strong> that not only meet but exceed expectations.</p><p>

            Let’s connect and explore how we can collaborate to bring your next project to life!
        </p>

    </>,
    SliderData: {
        title: "pata nahi kya likhe",
        slides: [
            {
                title: "nhi pata",
                image: "koi si",
                description: <p>
                    <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                    <br />
                    <strong>Solution</strong>: Dedicated extra hours to online courses and hands-on practice.
                    <br />
                    <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
                </p>
            },
            {
                title: "nhi pata",
                image: "koi si",
                description: <p>
                    <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                    <br />
                    <strong>Solution</strong>: Dedicated extra hours to online courses and hands-on practice.
                    <br />
                    <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
                </p>
            },
            {
                title: "nhi pata",
                image: "koi si",
                description: <p>
                    <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                    <br />
                    <strong>Solution</strong>: Dedicated extra hours to online courses and hands-on practice.
                    <br />
                    <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
                </p>
            },
        ]
    }
}
export const skillData = {
    title: "my Skills",
    skills: [
        { title: "HTML", icon: <AiOutlineHtml5 />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "90%" },
        { title: "CSS", icon: <TbBrandCss3 />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "80%" },
        { title: "JavaScript", icon: <TbBrandJavascript />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "70%" },
        { title: "Bootstrap", icon: <TbBrandBootstrap />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "70%" },
        { title: "Tailwind CSS", icon: <RiTailwindCssLine />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "60%" },
        { title: "React", icon: <LiaReact />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "80%" },
        { title: "Redux", icon: <TbBrandRedux />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "60%" },
        { title: "Git", icon: <FaGitAlt />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "65%" },
        { title: "GitHub", icon: <FaGithub />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "70%" },
        { title: "Terminal", icon: <TbTerminal2 />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "80%" },
        { title: "Node.js", icon: <RiNodejsLine />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "80%" },
        { title: "Express", icon: <SiExpress />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "80%" },
        { title: "MongoDb", icon: <SiMongodb />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "80%" },
        { title: "MySQL", icon: <TbBrandMysql />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "50%" },
        { title: "Java", icon: <RiJavaLine />, description: "kuch tho likhna hi haiii thoda ruko abhii likh re", percentage: "70%" },


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