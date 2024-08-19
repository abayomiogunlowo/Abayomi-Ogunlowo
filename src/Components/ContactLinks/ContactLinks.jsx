import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MediumIcon from '@mui/icons-material/Create';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Phone from '@mui/icons-material/Phone';
import styles from "./ContactLinksStyles";
import { Typography, Button } from "@mui/material";
import Resume from "../../Assets/Abayomi_Ogunlowo_Resume.pdf"; // Replace with your resume file path

const ContactLinks = () => {
    const classes = styles();
    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Primary
            </Typography>
            <a href="mailto:abayomix000@gmail.com">  {/* Replace with your email */}
                <EmailIcon fontSize="large" className={classes.email} />
            </a>
            <a href="tel:+2348140505183">  {/* Replace with your phone number */}
                <Phone fontSize="large" className={classes.phone} />
            </a>
            <Typography variant="h5" className={classes.title} mt={2}>
                Social
            </Typography>
            <a href="https://github.com/abayomix000">  {/* Replace with your GitHub profile */}
                <GitHubIcon fontSize="large" className={classes.github} />
            </a>
            <a href="https://www.linkedin.com/in/abayomi-ogunlowo">  {/* Replace with your LinkedIn profile */}
                <LinkedInIcon fontSize="large" className={classes.linkedin} />
            </a>
            <a href="https://twitter.com/abayomix000">  {/* Replace with your Twitter profile */}
                <TwitterIcon fontSize="large" className={classes.twitter} />
            </a>
            <a href="https://medium.com/@abayomi-ogunlowo">  {/* Replace with your Medium profile */}
                <MediumIcon fontSize="large" className={classes.medium} />
            </a>
            <a href="https://www.youtube.com/@abayomi-ogunlowo">  {/* Replace with your YouTube channel */}
                <YouTubeIcon fontSize="large" className={classes.youtube} />
            </a>
            <a href="https://www.instagram.com/abayomi-ogunlowo">  {/* Replace with your Instagram profile */}
                <InstagramIcon fontSize="large" className={classes.instagram} />
            </a>
            <Typography variant="h5" className={classes.title} mt={2} mb={2}>
                Resume
            </Typography>
            <Button variant="contained" href={Resume} className={classes.themeBtn} download>Download Resume</Button>
        </>
    );
};

export default ContactLinks;
