import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Pokemon.css';
import ColorThief from '../vendors/color-thief.js';

function mapStateToProps(state) {
  return {
    pokemon: state.get('selectedPokemon'),
  }
}

class Pokemon extends Component {
  componentDidMount() {
    const colorThief = new ColorThief();
    setTimeout(()=> {
      const palette = colorThief.getPalette(this.refs.sprite)
      document.body.style.background = 
      `
          linear-gradient(
              rgb(${palette[0]}),
              transparent
          ),
          linear-gradient(
              90deg,
              rgb(${palette[1]}),
              transparent
          ),
          linear-gradient(
              -90deg,
              rgb(${palette[2]}),
              transparent
          
      `;
    }, 3000);
  }
  render() {
    return (
      <article className="Pokemon">
        <div className="Sprite">
          <p>{`http://www.pokestadium.com/sprites/xy/${this.props.pokemon.get('name')}.gif`}</p>
          <img
            src={this.props.pokemon.get('sprites').toJS().front_default}
            crossOrigin="anonymous"
            ref="sprite"
            id="sp"
          />
        </div>
        <div className="Detail">
          <h2 className="Detail-name">
            {this.props.pokemon.get('name')}
          </h2>
        </div>
      </article>
    )
  }
}

export default connect(mapStateToProps)(Pokemon);