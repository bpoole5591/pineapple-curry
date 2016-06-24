// write a component that uses the object below to generate markup
// that looks like this:
//
// <div>
//   <div>
//     <h1>GROUP 1</h1>
//     <ul>
//       <li>MEMBER 1</li>
//       <li>MEMBER 2</li>
//       <li>MEMBER 3</li>
//     </ul>
//   </div>
//   <div>
//     <h2>GROUP 2</h2>
//     ... etc
//   </div>
//   ... etc
// </div>
//
// make the sure the colour of _JUST_ the h1 is the associated colour
//
// each group (and its enclosing div) should be its own component

const GROUPS = [
  {name : '2NE1'             , colour : '#ff69b4' , members : ['Bom', 'Dara', 'CL', 'Minzy'] }
, {name : '4Minute'          , colour : '#a474b2' , members : ['Jihyun', 'Gayoon', 'Jiyoon', 'Hyuna', 'Sohyun'] }
, {name : 'f(x)'             , colour : '#d5035a' , members : ['Victoria', 'Amber', 'Luna', 'Krystal', 'Sulli'] }
, {name : 'Miss A'           , colour : '#aaaaaa' , members : ['Fei', 'Min', 'Suzy', 'Jia'] }
, {name : 'Brown Eyed Girls' , colour : '#e2c221' , members : ['JeA', 'Miryo', 'Narsha', 'Ga-In'] }
]

// code goes here

class GroupList extends React.Component {
  render() {
    return (
      <div>
        {this.props.groups.map(data => <Group data={data} />)}
      </div>
    )
  }
}

class Group extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{colour : this.props.data.colour}}>{this.props.data.name}</h1>
        <ul>
          {this.props.data.players.map(member => <li>{member}</li> )}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <GroupList groups={GROUPS} />
, document.getElementById('root')
)
