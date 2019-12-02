import React from 'react'
import ReactDOM from 'react-dom'


exports.onClientEntry = async (_, pluginOptions = {}) => {
  console.log("We've started!")
  wireUpReactAxe(pluginOptions)
}

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
}

async function wireUpReactAxe(pluginOptions) {
  const { showInProduction, axeOptions } = {
    showInProduction: false,
    axeOptions: {},
    ...pluginOptions,
  }

  if (process.env.NODE_ENV === 'development' || showInProduction) {
    const { default: axe } = await import('react-axe')
    axe(React, ReactDOM, 1000, axeOptions)
  }
}