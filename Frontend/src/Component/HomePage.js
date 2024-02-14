import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import DisplayCardContent from './DisplayCardContent';
import { startGame } from '../Actions/startGameAction';
import { flipCard } from '../Actions/flipCard';
class HomePage extends Component {
  componentWillMount() {
    this.props.startGame();
  }
  flipCard = () => this.props.flipCard();
  render() {
    const { cardFlipped, cardArray, defuseCardNumber, res } = this.props.card;
    console.log(this.props.card);
    return (
      <div style={{margin:"0",height:"97vh", width:"98vw",backgroundImage: `url("https://theawesomedaily.com/wp-content/uploads/2017/12/cat-walking-away-from-explosion-6-1.jpg")`, backgroundSize: "cover"}}>
      <Grid container direction='row' style={{ padding: "10% 10% "}}>
        <Grid item sm={3} />
        <Grid item xs={12} sm={6}>
          <DisplayCardContent cardContent={cardFlipped} cardRemaining={cardArray.length} defuseCardNumber={defuseCardNumber} res={res} />
        </Grid>
        <Grid item sm={3} />
        <Grid item sm={3} />
        <Grid item xs={12} sm={6} style={{ marginTop: 30 }}>
          <Button variant='contained' color='primary' onClick={this.flipCard}>
            Flip a Card
          </Button>
        </Grid>
        <Grid item sm={3} />
      </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ card }) => ({ card });
const mapDispatchToProps = { startGame, flipCard };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
