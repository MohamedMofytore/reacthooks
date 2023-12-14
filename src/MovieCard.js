import{Card,CardBody,CardSubtitle,CardText,Button,CardTitle} from "reactstrap"
import ReactStars from "react-rating-stars-component";

const MovieCard=(props)=>{
   return(
    <Card                                                                                                                     
  style={{
    width: '25rem'
  }}
>
  <img
  style={{height:"300px"}}
    alt="Sample"
    src={props.el.img}
  />
  <CardBody>
    <CardTitle tag="h5">
     {props.el.name}
    </CardTitle>
    <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    value={props.el.star}
    edit={false}
  />
    <CardText>
 {props.el.discription} </CardText>

  </CardBody>
</Card>
   )
}
export default MovieCard