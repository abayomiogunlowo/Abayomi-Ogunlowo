import { Container, Grid, Typography, useMediaQuery, useTheme, Button } from "@mui/material";
import styles from "./HeadStyles.jsx";
import AbayomiOgunlowo from "../../Assets/Public_Speaking_abayomi.jpeg"; // Replace with your image
import AbayomiPortrait from "../../Assets/Abayomi_Ogunlowo.jpeg";
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from "react";
import Resume from "../../Assets/Abayomi_Ogunlowo_Resume.pdf"; // Replace with your resume

const heroImages = [AbayomiOgunlowo, AbayomiPortrait];

function HeadSection() {
    const classes = styles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("md"));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {/* Head Section */}
            <Container maxWidth="lg" id="head-section">
                <Grid container className={classes.root} spacing={4}>
                    <Grid item xs={12} md={6} style={{ minHeight: "200px" }}>
                        <Typography variant="h3" className={classes.welcomeTitle}>Hello!</Typography>
                        <Typography variant="h3" className={classes.title}>
                            I'm <span className={classes.textColored}>Abayomi.</span>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            <Typewriter
                                options={{
                                    strings: [
                                        'I develop scalable software solutions.',
                                        'I specialize in full-stack development.',
                                        'I manage and lead tech projects.',
                                        'I bring innovative ideas to life.',
                                        'I collaborate with teams to achieve goals.'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Typography>
                        <Button variant="contained" href="/contact" className={classes.themeBtn}>Get In Touch</Button>
                        <Button variant="outlined" href={Resume} className={classes.altBtn}>Download Resume</Button>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
                        <div className={classes.carouselContainer}>
                            {heroImages.map((src, index) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={`Abayomi Ogunlowo ${index + 1}`}
                                    className={`${classes.heroImage} ${index === currentImageIndex ? classes.carouselImageActive : classes.carouselImageInactive}`}
                                    draggable="false"
                                />
                            ))}
                            <div className={classes.carouselDots}>
                                {heroImages.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`${classes.carouselDot} ${index === currentImageIndex ? classes.carouselDotActive : ""}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {!small && (
                    <span className="scroll-btn">
                        <a href="#about-section" onClick={e => {
                            let whereTo = document.getElementById("about-section");
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

export default HeadSection;
