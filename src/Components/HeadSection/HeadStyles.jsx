import { makeStyles } from "@mui/styles";

// Styles for head section
export default makeStyles(({ breakpoints, palette }) => {
    return {
        textColored: {
            color: `${palette.primary.main} !important`,
        },
        root: {
            height: "100%",
            minHeight: "90vh",
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            [breakpoints.down("md")]: {
                minHeight: "75vh",
                marginTop: "80px !important",
            },
        },
        welcomeTitle: {
            [breakpoints.down("sm")]: {
                fontSize: "1.5rem !important",
                marginTop: "20px !important",
            },
        },
        title: {
            fontWeight: "bolder !important",
            marginTop: "10px !important",
            marginBottom: "20px !important",
            [breakpoints.down("sm")]: {
                fontSize: "1.8rem !important",
            },
        },
        subtitle: {
            marginBottom: "30px !important",
            [breakpoints.down("sm")]: {
                height: "75px !important"
            },
        },
        carouselContainer: {
            position: "relative",
            width: "500px",
            height: "450px",
            margin: "0 auto",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
            [breakpoints.down("md")]: {
                width: "100%",
                maxWidth: "420px",
                height: "380px",
            },
            [breakpoints.down("sm")]: {
                maxWidth: "380px",
                height: "340px",
            },
        },
        heroImage: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
            transition: "opacity 1s ease-in-out",
        },
        carouselImageActive: {
            opacity: 1,
            zIndex: 1,
        },
        carouselImageInactive: {
            opacity: 0,
            zIndex: 0,
        },
        carouselDots: {
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 2,
            background: "rgba(0, 0, 0, 0.3)",
            padding: "6px 12px",
            borderRadius: "20px",
            backdropFilter: "blur(4px)",
        },
        carouselDot: {
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
        },
        carouselDotActive: {
            backgroundColor: "#FFFFFF",
            transform: "scale(1.2)",
        },
        themeBtn: {
            backgroundColor: `${palette.primary.main} !important`,
            boxShadow: "none !important",
            fontWeight: "600 !important",
            color: "#ffffff",
            height: "46px",
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "30px !important",
            "&:hover": {
                backgroundColor: `${palette.primary.alt} !important`,
            },
            [breakpoints.down("md")]: {
                width: "70%",
                marginBottom: "20px !important",
            },
        },
        altBtn: {
            backgroundColor: `transparent !important`,
            boxShadow: "none !important",
            fontWeight: "600 !important",
            color: `${palette.primary.main} !important`,
            height: "46px",
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            "&:hover": {
                backgroundColor: `whitesmoke !important`,
            },
            [breakpoints.down("md")]: {
                width: "70%",
                marginBottom: "20px !important",
            },
        },
    };
});