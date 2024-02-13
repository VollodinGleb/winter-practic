import { createUseStyles } from "react-jss";
import ArrowButton from "../buttons/ArrowButton";
import RadiusButton from "../buttons/RadiusButton";

const FullScreenHeaderStyles = createUseStyles({
    header : {
        color: props => props.color,
        height: props => props.height
    },
    
    wrapContainer : {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100%"
    },

    headerDescription : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    
        marginBottom: "150px",

        '& > *': {
            width: "70%"
        },

        '& > h1': {
            fontSize: "50px",
            lineHeight: "50px"
        },

        '& > p' : {
            color: props => props.textColor
        },

        '@media (max-width: 1100px)': {
            '& > *' : {
                textAlign: "center"
            }
        },
        '@media (max-width: 550px)' : {
            '& > *' : {
                width: "auto"
            },
            '& > h1' : {
                fontSize: "30px"
            }
        },
        '@media (max-height: 550px)' : {
            '& > *' : {
                width: "auto"
            },
            '& > h1' : {
                fontSize: "30px",
                margin: "0"
            }
        }
    },

    linkButtons : {
        marginTop: "55px",
        '@media (max-height: 550px)': {
            '&': {
                margin: "0"
            }
        }
    }
})

export default function FullScreenHeader({ children, status, ...props }) {
    const classes = FullScreenHeaderStyles({...props})
    return (
        <div className={classes.header}>
            <div className={classes.wrapContainer}>
                <div className={classes.headerDescription}>

                    {children}

                    <div className={classes.linkButtons} style={status === "act" ? {} : {"display": "none"}}>
                        <RadiusButton href={"./"} text={"Vie our work"}/>
                        <ArrowButton href={"./"} text={"Vie Pricingk"} spacing={"25px"}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}