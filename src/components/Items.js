import React from 'react';
import { useFetch } from "./hooks";
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
import "../././data/data.json";

function Photos() {
    const [data, loading] = useFetch(
        "../././data/data.json"
    );
    return (
        <>
            <h1>Photos</h1>
            {loading ? (
                "Loading..."
            ) : (
                    <ul>
                        {data.map(({ id, title, url }) => (
                            <li key={`photo-${id}`}>
                                <img alt={title} src={url} />
                            </li>
                        ))}
                    </ul>
                )}
        </>
    );
}
export default Photos;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         margin: theme.spacing(10),
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         height: 300,
//         color: theme.palette.text.secondary,
//     },
//     image: {
//         // padding: 10,
//         margin: 10,
//         width: 100,
//         height: 500,
//     },
//     img: {
//         margin: '1000',
//         padding: 200,
//         display: 'block',
//         width: 300,
//         height: 250,
//         border: 2,
//         borderColor: 'gray',
//     },
// }));

// export default function AutoGrid() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>

//             <Grid container spacing={3}>

//                 <Grid item xs>
//                     <ButtonBase className={classes.image}>
//                         <img className={classes.img} alt="complex" src="https://img-global.cpcdn.com/recipes/a3531e8e1d706694/751x532cq70/%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9-%D9%84%D9%88%D8%B5%D9%81%D8%A9%D9%88%D8%B1%D9%82-%D8%B9%D9%86%D8%A8.webp" />
//                     </ButtonBase>

//                 </Grid>

//                 <Grid item xs>
//                     <ButtonBase className={classes.image}>
//                         <img className={classes.img} alt="complex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbq1fEy61ow1DOf3Hmxz3Tf-7c_tPmCSIRA&usqp=CAU" />
//                     </ButtonBase>
//                 </Grid>
//                 <Grid item xs>
//                     <ButtonBase className={classes.image}>
//                         <img className={classes.img} alt="complex" src="https://i.ytimg.com/vi/OPT962Zsje4/maxresdefault.jpg" />
//                     </ButtonBase>
//                 </Grid>
//             </Grid>

//         </div>
//     );
// }