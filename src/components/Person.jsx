import { Card, CardActionArea, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  person: {
    width: "100%",
    height: 150,
    padding: theme.spacing(3, 1),

    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  name: {
    marginBottom: theme.spacing(3),
  },
}))

function Info(text) {
  return (
    <Typography 
      align="left" 
      variant="body2" 
      component="p"
    >
      {text}
    </Typography>
  )
}


export default function Person(props) {
  const classes = useStyles();
  
  function handlePersonClick(id) {
    console.log(id)
    props.setContent("questionnaire")
  }

  // Will search for this with props.id
  const name = "Robert M. Gemma"
  const guardian1 = "Foo Bar"
  const guardian2 = "Foo Bar"
  return (
    <Card>
      <CardActionArea 
        className={classes.person}
        onClick={() => handlePersonClick(props.id)}
      >
        <Typography 
          align="center" 
          variant="" 
          component="h3"
          className={classes.name}
        >
          {name}
        </Typography>
        {Info("ID: " + props.id)}
        {Info("Guardian 1: " + guardian1)}
        {Info("Guardian 2: " + guardian2)} 
      </CardActionArea>
    </Card>
  )
}