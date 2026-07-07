import { makeStyles } from '@mui/styles';

// Setting styles for the Header component
export default makeStyles(({ breakpoints, palette }) => {
    return {
        toolbar: {
            minHeight: 55,
            width: "100%",
            maxWidth: "1800px",
            display: 'flex',
            backgroundColor: "white",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        },
        navbarElementsContainer: {
            color: "black",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            [breakpoints.down("md")]: {
                marginRight: "0px",
            },
        },
        cta: {
            marginLeft: 'auto',
            marginRight: "30px",
            color: "#6d6e6e",
            "&:hover": {
                color: `${palette.primary.main} !important`,
            },
        },
        root: {
            backgroundColor: "white",
            position: "fixed",
            height: "auto",
            display: "flex",
            alignItems: "center",
        },
        mainLogo: {
            fontFamily: "Avenir Next",
            display: "flex",
            marginLeft: "20px !important",
            alignSelf: "center",
            justifyContent: "center",
            color: "black",
            fontWeight: "bolder !important",
        },
        navbarContainer: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F4F7FD",
            borderRadius: "30px",
            padding: "4px 6px",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.05)",
        },
        navLinks: {
            padding: "6px 16px",
            borderRadius: "20px",
            fontWeight: "600 !important",
            textDecoration: "none",
            color: "#6D6E6E",
            fontSize: "0.95rem",
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover": {
                color: `${palette.primary.main} !important`,
                backgroundColor: "rgba(97, 0, 148, 0.08)",
            },
        },
        activeNav: {
            padding: "6px 16px",
            borderRadius: "20px",
            fontWeight: "600 !important",
            textDecoration: "none",
            color: "white !important",
            backgroundColor: `${palette.primary.main} !important`,
            fontSize: "0.95rem",
            transition: "all 0.3s ease",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(63, 0, 113, 0.25)",
            "&:hover": {
                backgroundColor: `${palette.primary.light} !important`,
            },
        },
        textColored: {
            color: `${palette.primary.main} !important`,
        },
    };
});