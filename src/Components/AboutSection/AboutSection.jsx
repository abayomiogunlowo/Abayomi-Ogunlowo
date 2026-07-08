import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "./AboutStyles.jsx";
import { useEffect } from "react";

function AboutSection() {
    const classes = styles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    return (
        <>
            {/* About Section */}
            <Container maxWidth="lg" id="about-section">
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.title}>
                            About <span className={classes.textColored}>Me</span>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            Full-Stack & Systems Engineer from Nigeria, specializing in building high-performance web applications, custom intranet environments, and hardware-linked IoT solutions. My experience ranges from deploying scalable SaaS architectures and installable Progressive Web Apps (PWAs) to engineering smart control systems (such as BLE integrations and RFID door locks) for hospitality, healthcare, and corporate environments.
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            What I bring to the table:
                            <ul>
                                <li><b>Full-Stack & Systems Engineering:</b> Proficient in React/NextJS, Python (FastAPI), Java (Spring Boot), Node.js, and database management (MySQL, PostgreSQL).</li>
                                <li><b>PWA & Cross-Device Engineering:</b> Specialized in building Progressive Web Apps (PWAs) with Service Workers and custom manifests, allowing applications to be fully installable across mobile, tablet, and desktop viewports with offline-ready capabilities.</li>
                                <li><b>IoT & Hardware Integration:</b> Experienced in linking software applications to physical IoT infrastructures, including Bluetooth Low Energy (BLE) systems, smart door locks, and custom hardware APIs.</li>
                                <li><b>Project Architecture & Compliance:</b> Skilled at managing complex technical pipelines and building compliance-centric applications (handling automated tax calculations, global payroll networks, and service orchestrations).</li>
                                <li><b>Robotics & Future Automation:</b> Actively expanding technical capabilities into robotics and automated control systems to bridge software logic with physical interaction.</li>
                                <li><b>Strategic Collaboration:</b> Partnering with cross-functional teams to translate complex business requirements into clean, scalable, and secure production systems.</li>
                            </ul>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            My passion lies in taking innovative ideas and turning them into reality, ensuring they are robust, functional, and user-friendly.
                        </Typography>
                    </Grid>
                </Grid>
                {!small && (
                    <span className="scroll-btn">
                        <a href="#skills-section" onClick={e => {
                            let whereTo = document.getElementById("skills-section");
                            e.preventDefault();
                            whereTo && whereTo.scrollIntoView({ behavior: "smooth", block: "start" });
                        }} style={{ display: "flex", justifyContent: "center" }}>
                            <span className="mouse">
                                <span></span>
                            </span>
                        </a>
                    </span>
                )}
            </Container>
        </>
    );
}

export default AboutSection;
