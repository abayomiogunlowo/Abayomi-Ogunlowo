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
                            Software Engineer from Nigeria, with expertise in building scalable and efficient systems using modern technologies. I have worked on a variety of projects ranging from SaaS applications to enterprise-level solutions.
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            What I bring to the table:
                            <ul>
                                <li><b>Technical Expertise:</b> Proficient in Java, Spring-Boot, React, FastAPI, and a range of database technologies like MySQL and PostgreSQL.</li>
                                <li><b>Project Management:</b> Experienced in managing projects from inception to deployment, ensuring quality and timely delivery.</li>
                                <li><b>Innovative Solutions:</b> Focused on creating effective solutions that solve real-world problems, with a keen eye on scalability and performance.</li>
                                <li><b>Team Collaboration:</b> Skilled in working with cross-functional teams, fostering an environment of collaboration and continuous learning.</li>
                                <li><b>Strategic Thinking:</b> Aligning technology solutions with business goals to drive growth and efficiency.</li>
                            </ul>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            My passion lies in taking innovative ideas and turning them into reality, ensuring they are functional and user-friendly.
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
