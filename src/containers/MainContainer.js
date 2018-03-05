import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as components from '../components/Display'
import * as actions from '../actions/actions.js'


const mapStateToProps = state => {
  return {
    state: state,  
  }
}

const mapDispatchToProps = actions;

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(components.Display)
