import Header from "../Components/Header/Header";
import { Container, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Footer from "../Components/Footer/Footer.jsx";
import { makeStyles } from "@mui/styles";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Content from '../Lib/Content';
import AkshatGupta from '../Assets/Abayomi_Ogunlowo.jpeg';

// Styles for Education page
const styles = makeStyles(({ breakpoints, palette }) => {
  return {
    textColored: {
      color: `${palette.primary.main} !important`,
    },
    root: {
      height: "100%",
      minHeight: "100vh",
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "7vh",
      [breakpoints.down("sm")]: {
        marginTop: "10vh",
      },
    },
    title: {
      fontWeight: "bolder !important",
      [breakpoints.down("sm")]: {
        fontSize: "1.8rem !important",
      },
    },
    hideSmall: {
      [breakpoints.down("sm")]: {
        display: "none !important"
      },
    },
    hiddenLinks: {
      color: `${palette.primary.main}`,
      "&:hover": {
        color: `${palette.primary.alt} !important`,
      },
    },
    photo: {
      width: "250px",
      height: "auto",
      borderRadius: "10px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      [breakpoints.up("md")]: {
        marginLeft: "30px",
      },
    },
    timeline: {
      [breakpoints.up("md")]: {
        marginRight: "30px",
      },
    }
  };
});

function Education() {
  const classes = styles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* Education Page */}
      <Header />
      <Container maxWidth="lg">
        <Grid
          container
          className={classes.root}
        >
          {/* Heading */}
          <Grid
            item
            xs={12}
          >
            <br /> {/* Adds a line break before the title */}
            <Typography variant="h3" className={classes.title}>
              Education
            </Typography>
          </Grid>
          {/* Grid */}
          <Grid
            item
            xs={12}
            sm={2}
            className={classes.hideSmall}
          >
            <img src={AkshatGupta} alt="Akshat Gupta" className={classes.photo} draggable="false" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
          >
            {/* Timeline */}
            <Timeline position={(small) ? "left" : "right"} className={classes.timeline}>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.ug.type}
                  </Typography>
                  <Typography>{Content.education.ug.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.ug.name}
                  </Typography>
                  <Typography>{Content.education.ug.course}</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.college.type}
                  </Typography>
                  <Typography>{Content.education.college.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.college.name}
                  </Typography>
                  <Typography>{Content.education.college.course}</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.highSchool.type}
                  </Typography>
                  <Typography>{Content.education.highSchool.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.highSchool.name}
                  </Typography>
                  <Typography>{Content.education.highSchool.course}</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.juniorSchool.type}
                  </Typography>
                  <Typography>{Content.education.juniorSchool.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.juniorSchool.name}
                  </Typography>
                  <Typography>{Content.education.juniorSchool.course}</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid
            item
            xs={12}
          >
            {/* Text */}
            <Typography variant="h5" className={classes.title}>
              Do I depend solely on books? 📚
            </Typography>
            <Typography variant="body1" mt={1}>
              My learning is not limited to the academic institutions I've been to. I believe in practical learning and take up tasks in new domains. I learn how to complete a task and hence learn my way up to mastering that domain.
            </Typography>
            <Typography variant="body1" mt={1}>
              I prefer grasping an unfamiliar concept through blog posts or examples which is why whenever I want to learn something technical, I explore Medium Blogs, Stack Overflow or GitHub repositories for better understanding.
            </Typography>
            <Typography variant="body1" mt={1}>
              I've been certified with Devpath by Educative for my skills in various domains:
            </Typography>
            <ul mt={1} mb={2}>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://drive.google.com/file/d/1zPueafWUuL9adf1l-k6cVFuJy-KWpYH0/view?usp=drive_link">A Complete Guide to Java Programming</a> (Credential ID vgA3wPFrRWVEqwwV2S8RmAw2mEJvhl)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://drive.google.com/file/d/1M9kxd3DBDr-ZvSbKUdKq9iWDw8s689wg/view?usp=drive_link">Web Application Security</a> (Credential ID 585DM2txMlrVDYBL5tlmX24EX9WBIq)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://drive.google.com/file/d/1FMc4OCQs4seAWrpsvNORjG-jIvRUt3-I/view?usp=drive_link">Build a Successful Developers Brand</a> (Credential ID: lOn30BIAD7Ql6j805FgZ8qjp8NkmUM)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://drive.google.com/file/d/1iahPybVuhRLs-BD7a7yaPDoWM_cbVFif/view?usp=drive_link">Java for Programmers</a> (Credential ID: 2R50XYCRNVRMQoENvu0jR2LgRv36F3)</li>
              <li><a target="_blank" rel="noreferrer" className={classes.hiddenLinks} href="https://drive.google.com/drive/folders/1qUIU1Iw3WYxDwFDOuH-yvKVeXkCqiDV2">All Certificates</a></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Education;