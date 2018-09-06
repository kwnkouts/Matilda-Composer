const style = {

main: {
  margin:'0px',
  padding:'0px'
  },

  spacer: {
    width: '100%',
    height: '95px'
  },

  nodeBox: {
    margin:'0 auto',
    fontFamily:'Helvetica, sans-serif',
    height: '100%',
    width: '15%',
    position: 'fixed',

    overflowX: 'hidden',
    left: '0',
    backgroundColor: 'grey',
    },

canvas: {
  height: '100%',
  width: '85%',
  position: 'fixed',

  overflowX: 'hidden',

  right: '0',
  backgroundColor: '#111',
},

  title: {
    textAlign:'center',
    textTransform:'uppercase'
  },
  nodeList: {
    paddingTop: '30px',
  },
  node: {
    backgroundColor:'#fafafa',
    marginTop:'5px',
    padding:'3px 3px',
    fontSize:'.85rem',
  },

  search: {
    height: '40px',
    width: '100%',
  }
}

module.exports = style;
