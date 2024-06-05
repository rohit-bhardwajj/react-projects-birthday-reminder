import data from './data';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BirthdayFilter(){
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.getMonth()+1;
const today = `${day}-${month}`;
//   const today = `${2}-${5}`;

   let todaybirthdays = data.filter(person=>{
    const [birthDate,birthMonth] = person.dob.split('-');
    return  `${parseInt(birthDate)}-${(parseInt(birthMonth))}`===today;
})
  
return (
    <div>
       <h1>Today's Birthdays</h1>
       {/* {console.log(todaybirthdays)} */}
       { 
        todaybirthdays.length>0? (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2  ,blockSize:'3'}}>
            {todaybirthdays.map(person => (
              <Card key={person.id} sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Happy Birthday
                  </Typography>
                  <Typography variant="h5" component="div">
                    {person.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Age: {person.age}
                  </Typography>
                  <Typography variant="body2">
                    <img src={person.image} alt={person.name} style={{ width: '100%' ,height:'200px',borderRadius:'50%' }} />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        ):
          
     <p>No birthdays Today</p>
    }
    </div>
)
}